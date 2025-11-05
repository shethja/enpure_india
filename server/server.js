// server.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import Razorpay from "razorpay";
import cors from "cors";
//import crypto from "crypto";
import { createHmac } from "node:crypto";

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// 🪙 Create order
app.post("/create-order", async (req, res) => {
  const { amount, currency } = req.body;

  const options = {
    amount: amount * 100, // amount in paise
    currency: currency || "INR",
    receipt: `receipt_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

// 🧾 Verify payment signature (new route)
app.post("/verify-payment", (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSign = createHmac("sha256", process.env.RAZORPAY_KEY_SECRET) // 👈 your TEST SECRET here
      .update(sign.toString())
      .digest("hex");

    if (expectedSign === razorpay_signature) {
      console.log("✅ Signature verified successfully!");
      return res.json({ success: true });
    } else {
      console.log("❌ Signature verification failed!");
      console.log("Expected:", expectedSign);
      console.log("Received:", razorpay_signature);
      return res.status(400).json({ success: false, message: "Invalid signature" });
    }
  } catch (error) {
    console.error("Verification error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
//console.log(process.env);
