import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { auth, db } from '../firebase';
import emailjs from 'emailjs-com';
import { getDoc, doc, updateDoc } from "firebase/firestore";


const Checkout = () => {
  const { items, getTotalPrice, clearCart, placeOrder } = useCart();
  
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    fullName: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || '',
    address: user?.address || '',
    city: '',
    state: '',
    pincode: '',
    landmark: ''
  });
  
  const [paymentMethod, setPaymentMethod] = useState('card');

  const [installationDate, setInstallationDate] = useState('');
  const [installationTime, setInstallationTime] = useState('');

  const subtotal = Math.round(getTotalPrice()/1.18);
  const tax = Math.round(subtotal * 0.18);
  const total = Math.round(subtotal + tax);

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleInstallationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

/*
const handlePaymentSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if(paymentMethod === "cod" ){
  try {
    setTimeout(async () => {
      const user = auth.currentUser;
      if (!user) return;

      const orderId = await placeOrder();
      console.log("Order ID is:", orderId);
      
      if (!orderId) return;

      const orderRef = doc(db, "users", user.uid, "orders", orderId);

      // ✅ Update order with checkout details
      await updateDoc(orderRef, {
        shippingInfo,
        installationDate,
        installationTime,
        tax,
        total,
      });

      //Send Email Confirmation
      // ✅ Fetch complete order data from Firestore
      const orderSnap = await getDoc(orderRef);
      if (!orderSnap.exists()) {
        console.error("Order not found in Firestore");
        return;
      }

      const orderData = orderSnap.data();

      // ✅ Generate HTML table for items
      const itemsHtml = (orderData.items || [])
        .map(
          (item: any) => `
          <tr>
            <td style="border: 1px solid #ddd; padding: 10px; font-size: 14px;">${item.name || "Unknown"}</td>
            <td style="border: 1px solid #ddd; padding: 10px; font-size: 14px;">${item.quantity}</td>
            <td style="border: 1px solid #ddd; padding: 10px; font-size: 14px;">₹${(
              item.price || 0
            ).toLocaleString()}</td>
          </tr>`
        )
        .join("");

      // ✅ Combine everything into email params
      const emailParams = {
        name: user.displayName || "Customer",
        email: user.email,
        orderId: orderId,
        payment_method: orderData.paymentMethod || "N/A",
        installation_date: orderData.installationDate || "N/A",
        installation_time: orderData.installationTime || "N/A",
        shipping_address:
          orderData.shippingInfo?.address ||
          `${orderData.shippingInfo?.street || ""}, ${
            orderData.shippingInfo?.city || ""
          }`,
        subtotal: (orderData.total - orderData.tax).toFixed(2),
        tax: orderData.tax.toFixed(2),
        total: orderData.total.toFixed(2),
        items_table: `
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
            <tr style="background:#f2f2f2;">
              <th style="border: 1px solid #ddd; padding: 10px; font-size: 14px background: #f1f5ff; text-align: left;">Item</th>
              <th style="border: 1px solid #ddd; padding: 10px; font-size: 14px background: #f1f5ff; text-align: left;">Qty</th>
              <th style="border: 1px solid #ddd; padding: 10px; font-size: 14px background: #f1f5ff; text-align: left;">Price</th>
            </tr>
            ${itemsHtml}
          </table>
          
        `,
      };

      // ✅ Send email via EmailJS
      await emailjs.send(
        "service_w68sbak", // EmailJS Service ID
        "template_5ny3toh", // Template ID
        emailParams,
        "b__8bJCneOE0SlqZ6" // Public key
      );

      console.log("✅ Order confirmation email sent with full order details!");

      navigate("/order-confirmation", { state: { orderId } });
      clearCart();
      
    }, 2000);
  } catch (error) {
    console.error("Error placing order:", error);
  }
};
*/

const handlePaymentSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if(paymentMethod === "COD" ){
  try {
    setTimeout(async () => {
      const user = auth.currentUser;
      if (!user) return;

      // 3. Store payment info in Firestore
      //await addDoc(collection(db, "payments"), paymentData);
      const orderId = await placeOrder();
      console.log("Order ID is:", orderId);
      
      if (!orderId) return;

      const orderRef = doc(db, "users", user.uid, "orders", orderId);

      // ✅ Update order with checkout details
      await updateDoc(orderRef, {
        shippingInfo,
        paymentMethod,
        installationDate,
        installationTime,
        tax,
        total,
      });
      console.log('Order details updated');

      navigate("/order-confirmation", { state: { orderId } });
      clearCart();
      
      //Send Email Confirmation
      // ✅ Fetch complete order data from Firestore
      const orderSnap = await getDoc(orderRef);
      if (!orderSnap.exists()) {
        console.error("Order not found in Firestore");
        return;
      }

      const orderData = orderSnap.data();

      // ✅ Generate HTML table for items
      const itemsHtml = (orderData.items || [])
        .map(
          (item: any) => `
          <tr>
            <td style="border: 1px solid #ddd; padding: 10px; font-size: 14px;">${item.name || "Unknown"}</td>
            <td style="border: 1px solid #ddd; padding: 10px; font-size: 14px;">${item.quantity}</td>
            <td style="border: 1px solid #ddd; padding: 10px; font-size: 14px;">${item.color}</td>
            <td style="border: 1px solid #ddd; padding: 10px; font-size: 14px;">₹${(
              item.price || 0
            ).toLocaleString()}</td>
          </tr>`
        )
        .join("");

      // ✅ Combine everything into email params
      const emailParams = {
        name: user.displayName || "Customer",
        email: user.email,
        orderId: orderId,
        payment_method: orderData.paymentMethod || "N/A",
        installation_date: orderData.installationDate || "N/A",
        installation_time: orderData.installationTime || "N/A",
        shipping_address:
          orderData.shippingInfo?.address ||
          `${orderData.shippingInfo?.street || ""}, ${
            orderData.shippingInfo?.city || ""
          }`,
        subtotal: (orderData.total - orderData.tax).toFixed(2),
        tax: orderData.tax.toFixed(2),
        total: orderData.total.toFixed(2),
        items_table: `
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
            <tr style="background:#f2f2f2;">
              <th style="border: 1px solid #ddd; padding: 10px; font-size: 14px background: #f1f5ff; text-align: left;">Item</th>
              <th style="border: 1px solid #ddd; padding: 10px; font-size: 14px background: #f1f5ff; text-align: left;">Qty</th>
              <th style="border: 1px solid #ddd; padding: 10px; font-size: 14px background: #f1f5ff; text-align: left;">Color</th>
              <th style="border: 1px solid #ddd; padding: 10px; font-size: 14px background: #f1f5ff; text-align: left;">Price</th>
            </tr>
            ${itemsHtml}
          </table>
          
        `,
      };

      // ✅ Send email via EmailJS
      await emailjs.send(
        "service_w68sbak", // EmailJS Service ID
        "template_5ny3toh", // Template ID
        emailParams,
        "b__8bJCneOE0SlqZ6" // Public key
      );

      console.log("✅ Order confirmation email sent with full order details!");
      
    }, 2000);
  } catch (error) {
    console.error("Error placing order:", error);
  }}

  else if(paymentMethod === 'Razorpay'){
    try {
      setTimeout(async () => {
        const user = auth.currentUser;
        if (!user) return;

        const amount = total; // from your cart total
        const currency = "INR";

        // 1️⃣ Create order via backend
        const response = await fetch("http://localhost:5000/create-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount, currency }),
        });
        const order = await response.json();
        //console.log(import.meta.env);
        // 2️⃣ Configure Razorpay options
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,
          amount: order.amount,
          currency: order.currency,
          name: "Enpure",
          description: "Product Purchase",
          order_id: order.id,

          handler: async function (response: any) {
            try {
              
                // 🧾 2.1 Verify the payment on backend before proceeding
                const verifyRes = await fetch("http://localhost:5000/verify-payment", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                  }),
                });

                const verifyData = await verifyRes.json();
                
                if (!verifyData.success) {
                  alert("❌ Payment verification failed. Please contact support.");
                  console.error("Verification failed:", verifyData);
                  return;
                }

                console.log("✅ Payment verified successfully!");
                


                // ✅ Payment successful — store payment details
                const paymentData = {
                  paymentId: response.razorpay_payment_id,
                  orderId: response.razorpay_order_id,
                  signature: response.razorpay_signature,
                  amount,
                  timestamp: new Date().toISOString(),
                };


                // 3️⃣ Place order AFTER successful payment
                const orderId = await placeOrder();
                console.log("✅ Order ID:", orderId);

                if (!orderId) return;

                const orderRef = doc(db, "users", user.uid, "orders", orderId);

                // 4️⃣ Update Firestore with payment info and checkout details
                await updateDoc(orderRef, {
                  paymentMethod,
                  paymentData,
                  shippingInfo,
                  installationDate,
                  installationTime,
                  tax,
                  total,
                });

              console.log('Order Details updated!');
              navigate("/order-confirmation", { state: { orderId } });
              clearCart();

              //Send Email Confirmation
              // ✅ Fetch complete order data from Firestore
              const orderSnap = await getDoc(orderRef);
              if (!orderSnap.exists()) {
                console.error("Order not found in Firestore");
                return;
              }

              const orderData = orderSnap.data();

              // ✅ Generate HTML table for items
              const itemsHtml = (orderData.items || [])
                .map(
                  (item: any) => `
                  <tr>
                    <td style="border: 1px solid #ddd; padding: 10px; font-size: 14px;">${item.name || "Unknown"}</td>
                    <td style="border: 1px solid #ddd; padding: 10px; font-size: 14px;">${item.quantity}</td>
                    <td style="border: 1px solid #ddd; padding: 10px; font-size: 14px;">${item.color}</td>
                    <td style="border: 1px solid #ddd; padding: 10px; font-size: 14px;">₹${(
                      item.price || 0
                    ).toLocaleString()}</td>
                  </tr>`
                )
                .join("");

              // ✅ Combine everything into email params
              const emailParams = {
                name: user.displayName || "Customer",
                email: user.email,
                orderId: orderId,
                payment_method: orderData.paymentMethod || "N/A",
                installation_date: orderData.installationDate || "N/A",
                installation_time: orderData.installationTime || "N/A",
                shipping_address:
                  orderData.shippingInfo?.address ||
                  `${orderData.shippingInfo?.street || ""}, ${
                    orderData.shippingInfo?.city || ""
                  }`,
                subtotal: (orderData.total - orderData.tax).toFixed(2),
                tax: orderData.tax.toFixed(2),
                total: orderData.total.toFixed(2),
                items_table: `
                  <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
                    <tr style="background:#f2f2f2;">
                      <th style="border: 1px solid #ddd; padding: 10px; font-size: 14px background: #f1f5ff; text-align: left;">Item</th>
                      <th style="border: 1px solid #ddd; padding: 10px; font-size: 14px background: #f1f5ff; text-align: left;">Qty</th>
                      <th style="border: 1px solid #ddd; padding: 10px; font-size: 14px background: #f1f5ff; text-align: left;">Color</th>
                      <th style="border: 1px solid #ddd; padding: 10px; font-size: 14px background: #f1f5ff; text-align: left;">Price</th>
                    </tr>
                    ${itemsHtml}
                  </table>
                  
                `,
              };

              // ✅ Send email via EmailJS
              await emailjs.send(
                "service_w68sbak", // EmailJS Service ID
                "template_5ny3toh", // Template ID
                emailParams,
                "b__8bJCneOE0SlqZ6" // Public key
              );

              console.log("✅ Order confirmation email sent with full order details!");


                // 7️⃣ Clear cart and navigate
                //clearCart();
                
                //navigate("/order-confirmation", { state: { orderId } });
                //alert("✅ Payment Successful! Your order has been placed.");
            } catch (error) {
              console.error("❌ Error after payment:", error);
            }
          },
        };

        // 8️⃣ Launch Razorpay checkout
        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      }, 100);
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  }
};



  if (!isAuthenticated) {
    navigate('/login?redirect=/checkout');
    return null;
  }

  if (items.length === 0) {
    //navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-white ">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Checkout</h1>

          {/* Progress Steps */}
          <div className="flex flex-wrap items-center justify-center gap-y-4 mb-8 text-center">
            {[
              { num: 1, label: 'Shipping' },
              { num: 2, label: 'Installation' },
              { num: 3, label: 'Payment' },
              { num: 4, label: 'Complete' },
            ].map((stepInfo, index) => (
              <React.Fragment key={stepInfo.num}>
                <div className="flex items-center justify-center mx-2 sm:mx-3">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step >= stepInfo.num
                        ? 'bg-blue-900 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step > stepInfo.num ? <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" /> : stepInfo.num}
                  </div>
                  <span className="ml-2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                    {stepInfo.label}
                  </span>
                </div>
                {index < 3 && (
                  <div
                    className={`h-0.5 w-10 sm:w-16 mx-2 sm:mx-4 ${
                      step > stepInfo.num ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                {step === 1 && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Shipping Information</h2>
                    <form onSubmit={handleShippingSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={shippingInfo.fullName}
                            onChange={(e) => setShippingInfo({...shippingInfo, fullName: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={shippingInfo.phone}
                            onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={shippingInfo.email}
                          onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Address *
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={shippingInfo.address}
                          onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            City *
                          </label>
                          <input
                            type="text"
                            required
                            value={shippingInfo.city}
                            onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            State *
                          </label>
                          <input
                            type="text"
                            required
                            value={shippingInfo.state}
                            onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Pincode *
                          </label>
                          <input
                            type="text"
                            required
                            value={shippingInfo.pincode}
                            onChange={(e) => setShippingInfo({...shippingInfo, pincode: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Landmark (Optional)
                        </label>
                        <input
                          type="text"
                          value={shippingInfo.landmark}
                          onChange={(e) => setShippingInfo({...shippingInfo, landmark: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        />
                      </div>
                      <div className="flex space-x-3">
                        <button
                          type="button"
                          onClick={() => navigate("/cart")}
                          className="modern-button glass-card w-full inline-flex bg-blue-875 text-black text-base font-medium py-4 px-8 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg"
                        >
                          Back
                        </button>
                      <button
                        type="submit"
                        className="modern-button glass-card w-full inline-flex bg-blue-875 text-black text-base font-medium py-4 px-8 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg"
                      >
                        Continue to Installation
                      </button>
                      </div>
                    </form>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Method</h2>
                    <form onSubmit={handlePaymentSubmit} className="space-y-4">
                      {/* Payment Options */}
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="payment"
                            value="Razorpay"
                            checked={paymentMethod === "Razorpay"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="text-blue-600"
                          />
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
                            alt="Razorpay"
                            className="h-5 w-auto"
                          />
                          {/* <span>Pay Online (Razorpay)</span> */}
                        </label>

                        <label className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="payment"
                            value="COD"
                            checked={paymentMethod === "COD"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="text-blue-600"
                          />
                          <span className="font-semibold">Cash on Delivery</span>
                          <Truck></Truck>
                        </label>
                      </div>

                      <div className="flex space-x-3">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="modern-button glass-card w-full inline-flex bg-blue-875 text-black text-base font-medium py-4 px-8 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="modern-button w-full glass-card inline-flex bg-blue-875 text-black text-base font-medium py-4 px-8 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg"
                        >
                          Place Order
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Schedule Installation</h2>
                    <form onSubmit={handleInstallationSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Installation Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={installationDate}
                          onChange={(e) => setInstallationDate(e.target.value)}
                          min={(() => {
                            const date = new Date();
                            date.setDate(date.getDate() + 10); // ✅ Add 10 days
                            return date.toISOString().split('T')[0];
                          })()}
                          className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Time Slot *
                        </label>
                        <select
                          required
                          value={installationTime}
                          onChange={(e) => setInstallationTime(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select Time Slot</option>
                          <option value="9am-12pm">9:00 AM - 12:00 PM</option>
                          <option value="12pm-3pm">12:00 PM - 3:00 PM</option>
                          <option value="3pm-6pm">3:00 PM - 6:00 PM</option>
                        </select>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-medium text-blue-900 mb-2">Installation Information</h3>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Schedule for Installation - 10 business days after Order Confirmation.</li>
                          <li>• Professional installation by certified technicians</li>
                          <li>• Installation typically takes 2-3 hours</li>
                          <li>• All necessary pipes and fittings included</li>
                          <li>• One year free maintenance included</li>
                        </ul>
                      </div>

                      <div className="flex space-x-3">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="modern-button glass-card w-full inline-flex bg-blue-875 text-black text-base font-medium py-4 px-6 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="modern-button glass-card w-full inline-flex bg-blue-875 text-black text-base font-medium py-4 px-8 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg"
                        >
                          Continue to Payment
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {step === 4 && (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h2>
                    <p className="text-gray-600 mb-6">
                      Thank you for your order. You will receive a confirmation email shortly.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <p className="text-sm text-gray-600">
                        <strong>Order ID:</strong> ENP-{Date.now()}<br />
                        <strong>Installation Date:</strong> {installationDate}<br />
                        <strong>Time Slot:</strong> {installationTime}
                      </p>
                    </div>
                    <button
                      onClick={() => navigate('/products')}
                      className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 hover:shadow-lg"
                    >
                      Continue Shopping
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1 mt-8 lg:mt-0">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center space-x-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.product.name}</h4>
                        <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                        <p className="text-xs text-gray-600">Color: {item.product.defaultColor}</p>
                      </div>
                      <span className="text-sm font-medium">
                        ₹{(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (18%)</span>
                    <span>₹{tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>Total</span>
                    <span className="text-blue-900">₹{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;