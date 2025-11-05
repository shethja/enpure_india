import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Product } from '../data/products';
import { auth, db } from '../firebase';
import {
  doc,
  setDoc,
  updateDoc,
  onSnapshot,
  deleteField,
} from 'firebase/firestore';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string, defaultColor: string) => void;
  updateQuantity: (productId: string, defaultColor:string, quantity: number) => void;
  clearCart: () => void;
  placeOrder: () => Promise<string | null>;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // 🔥 Load Firestore cart data when user logs in
    useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setItems([]);
        return;
      }

      const userRef = doc(db, 'users', user.uid);

      // Realtime sync with Firestore user document
      const unsubUser = onSnapshot(userRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          if (data.cartItems) {
            console.log('✅ Loaded cartItems from Firestore:', data.cartItems);
            setItems(data.cartItems);
          } else {
            console.log('📭 No cartItems found — initializing empty.');
            setItems([]);
          }
        } else {
          setItems([]);
        }
      });

      return () => unsubUser();
    });

    return () => unsubscribe();
  }, []);

  //Place order - returning orderId
  // 🧾 Place Order and return orderId
 const placeOrder = async () => {
  const user = auth.currentUser;
  if (!user) {
    alert("Please log in to place an order.");
    return null;
  }

  if (items.length === 0) {
    alert("Your cart is empty!");
    return null;
  }

  try {
    // 🔹 Reference to user's orders subcollection
    const ordersRef = collection(db, "users", user.uid, "orders");

    // 🔹 Create new order document
    console.log("🛠 Writing order to:", `users/${user.uid}/orders`);

    const newOrderRef = await addDoc(ordersRef, {
      items: items.map((item) => ({
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        color: item.product.defaultColor,
        image: item.product.image,
      })),
      totalAmount_beforeTax: Math.round(getTotalPrice()/1.18),
      orderDate: serverTimestamp(),
    });

    console.log("✅ Order placed with ID:", newOrderRef.id);
    return newOrderRef.id; // Return the Firestore order ID
  } catch (error) {
    console.error("❌ Error placing order:", error);
    alert("Error placing order. Please try again.");
    return null;
  }
};

    

  // 🔧 Save cart to Firestore
  const saveCartToFirestore = async (updatedItems: CartItem[]) => {
    const user = auth.currentUser;
    if (!user) {
      console.warn('⚠️ No user signed in — not saving cart.');
      return;
    }
    try {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, { cartItems: updatedItems }, { merge: true });
      console.log('📝 Cart saved to Firestore:', updatedItems);
    } catch (error) {
      console.error('❌ Error saving cart:', error);
    }
  };

  // ➕ Add to Cart
  const addToCart = (product: Product, quantity: number = 1) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product.id === product.id && item.product.defaultColor === product.defaultColor
      );
      let updatedItems;

      if (existingItem) {
        updatedItems = currentItems.map((item) =>
          item.product.id === product.id && item.product.defaultColor === product.defaultColor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        updatedItems = [...currentItems, { product, quantity }];
      }

      //Add to Cart GA-GTM
      window.dataLayer.push({
        event: "add_to_cart",
        ecommerce: {
        currency: "INR",
        value: product.price * quantity,
        items: [{
          item_id: product.id,
          item_name: product.name,
          price: product.price,
          item_brand: "Enpure",
          item_category: product.category,
          quantity: quantity,
          item_variant: product.defaultColor // if you added color
        }]
          }
        });

      saveCartToFirestore(updatedItems);
      return updatedItems;
    });
  };

  // ❌ Remove from Cart
  const removeFromCart = (productId: string, defaultColor: string) => {
    setItems((currentItems) => {
      const updatedItems = currentItems.filter(
        (item) => (item.product.id !== productId || item.product.defaultColor !== defaultColor )
      );
      saveCartToFirestore(updatedItems);
      return updatedItems;
    });
  };

  // 🔄 Update Quantity
  const updateQuantity = (productId: string, defaultColor: string, quantity: number) => {

    if (quantity <= 0) {
      removeFromCart(productId, defaultColor);
      return;
    }

    setItems((currentItems) => {
      const updatedItems = currentItems.map((item) =>
        (item.product.id === productId && item.product.defaultColor === defaultColor) ? { ...item, quantity } : item
      );
      saveCartToFirestore(updatedItems);
      return updatedItems;
    });
  };

  // 🧹 Clear Cart
  const clearCart = async () => {
    setItems([]);
    const user = auth.currentUser;
    if (user) {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, { cartItems: deleteField() }).catch(async () => {
        await setDoc(userRef, { cartItems: [] }, { merge: true });
      });
    }
  };

  // 💰 Get Totals
  const getTotalPrice = () =>
    items.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const getTotalItems = () =>
    items.reduce((total, item) => total + item.quantity, 0);
  

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
        placeOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
