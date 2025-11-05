import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { auth, db } from "../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  User as FirebaseUser,
} from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Omit<User, "id"> & { password: string }) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

const normalizeUser = (firebaseUser: FirebaseUser | null): User | null => {
  if (!firebaseUser) return null;
  return {
    id: firebaseUser.uid,
    name: firebaseUser.displayName || firebaseUser.email?.split("@")[0] || "User",
    email: firebaseUser.email || "",
    phone: firebaseUser.phoneNumber || "",
    address: ""
  };
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("🔹 AuthContext mounted — Listening for Firebase user changes");
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      const normalized = normalizeUser(firebaseUser);
      setUser(normalized);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      console.error("❌ Login error:", error);
      throw error; // Pass error to Login.tsx
    }
  };


  const register = async (userData: Omit<User, "id"> & { password: string }) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
      if (result.user) {
        await updateProfile(result.user, { displayName: userData.name });
        
        console.log ("Awaiting User Doc - Creating Firestore User Doc....");
        await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        name: userData.name,
        email: userData.email,
        phone: userData.phone || "",
        address: userData.address || "",
        createdAt: new Date().toISOString(),
      });

        setUser(normalizeUser(result.user));
      }
    } catch (error: any) {
      console.error("❌ Registration error:", error);
    throw error;
    }
  };

  const logout = async () => {
    await signOut(auth);
    console.log('Successfully logged out...');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        login,
        register,
        logout,
      }}
    >
      {!loading ? (
        children
      ) : (
        <div className="flex justify-center items-center h-screen text-gray-800 text-lg">
          Loading user...
        </div>
      )}
    </AuthContext.Provider>
  );
};
