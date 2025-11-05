import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { format } from "date-fns";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  color: string;
}

interface Order {
  id: string;
  items: OrderItem[];
  orderDate?: any;
  shippingInfo?: any;
  installationInfo?: any;
  paymentMethod?: string;
  tax: number;
  total: number;
  totalAmount_beforeTax: number;
}

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchOrders = async () => {
      const user = auth.currentUser;
      if (!user) {
        console.warn("⚠️ No user logged in");
        return;
    }

    try {
      console.log("👀 Fetching orders for user:", user.uid);

      const ordersRef = collection(db, "users", user.uid, "orders");
      const q = query(ordersRef, orderBy("orderDate", "desc"));
      const snapshot = await getDocs(q);

      console.log("📦 Orders snapshot size:", snapshot.size);
      snapshot.docs.forEach((d) => console.log("🧾 Order doc:", d.id, d.data()));

      if (snapshot.empty) {
        console.log("⚠️ No orders found for user:", user.uid);
      }

      const fetchedOrders: Order[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Order[];

      setOrders(fetchedOrders);
    } catch (error) {
      console.error("❌ Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchOrders();
}, []);

  if (loading) {
    return <div className="text-center text-gray-500 mt-10">Loading orders...</div>;
  }

  if (orders.length === 0) {
    return <div className="text-center text-gray-500 mt-10">No orders found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">My Orders</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="glass-card border border-gray-200 rounded-lg p-5 shadow-sm hover:bg-white hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-3">
              <div>
                <p className="font-medium text-gray-700">Order ID: {order.id}</p>
                <p className="text-sm text-gray-500">
                  Date:{" "}
                  {order.orderDate?.seconds
                    ? format(new Date(order.orderDate.seconds * 1000), "PPpp")
                    : "N/A"}
                </p>
              </div>
              <div className="text-right">
              <p className="text-lg font-semibold text-blue-900">
                ₹{order.total}
              </p>
              </div>
            </div>

            {order.paymentMethod && (
              <p className="text-sm text-gray-600 mb-2">
                Payment Method: {order.paymentMethod}
              </p>
            )}

            {order.shippingInfo && (
              <div className="text-sm text-gray-600 mb-3">
                <p>Shipping: {order.shippingInfo.address}</p>
              </div>
            )}

            <div className="border-t border-gray-200 pt-3">
              <p className="font-medium text-gray-700 mb-2">Items:</p>
              <ul className="space-y-1">
                {order.items.map((item) => (
                  <li key={item.id} className="flex justify-between text-sm text-gray-600">
                    <span>
                      {item.name} × {item.color} × {item.quantity}
                    </span>
                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
