import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
return (
    <>
    <article className="py-16 bg-white text-slate-900">
        <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-5xl font-light mb-3">Terms & Conditions</h1>
            <br/>
            <p className="text-blue-500 text-md mb-3">
            <strong>Last Updated:</strong> October 28, 2025
            </p>

            <p className="text-gray-900 leading-relaxed mb-6">
              Welcome to <em>Enpure</em> by DiHydro Tech Innovations. These Terms and Conditions ("Terms") govern your use of our website and the purchase of our water purification products and services. By accessing our website or making a purchase, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. General Terms</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">1.1 Acceptance of Terms</h3>
            <p className="text-gray-900 leading-relaxed mb-4">
              By using this website (www.enpure.com), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, along with our Privacy Policy.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">1.2 Eligibility</h3>
            <p className="text-gray-900 leading-relaxed mb-4">
              You must be at least 18 years of age to make a purchase on our website. By placing an order, you represent that you are of legal age to enter into a binding contract.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">1.3 Modifications</h3>
            <p className="text-gray-900 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of the website after changes constitutes acceptance of the modified Terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Products and Services</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">2.1 Product Information</h3>
            <p className="text-gray-900 leading-relaxed mb-4">
              We strive to ensure that all product descriptions, specifications, and images are accurate. However, we do not warrant that product descriptions or other content is error-free, complete, or current.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">2.2 Pricing</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-900 space-y-2">
              <li>All prices are listed in Indian Rupees (INR) and include applicable taxes unless otherwise stated</li>
              <li>Prices are subject to change without notice</li>
              <li>We reserve the right to correct pricing errors on our website</li>
              <li>If a pricing error occurs after you've placed an order, we will contact you for instructions</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">2.3 Product Availability</h3>
            <p className="text-gray-900 leading-relaxed mb-4">
              All products are subject to availability. We reserve the right to discontinue any product at any time without prior notice.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Orders and Payment</h2>
            
            <h3 className="text-xl fontmedium text-gray-900 mt-6 mb-3">3.1 Order Acceptance</h3>
            <p className="text-gray-900 leading-relaxed mb-3">
              Your order constitutes an offer to purchase products. All orders are subject to acceptance by us. We reserve the right to refuse or cancel any order for any reason, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-900 space-y-2">
              <li>Product unavailability</li>
              <li>Pricing errors</li>
              <li>Suspected fraudulent activity</li>
              <li>Failure to meet eligibility requirements</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.2 Payment Methods</h3>
            <p className="text-gray-900 leading-relaxed mb-3">We accept the following payment methods:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-900 space-y-2">
              <li>Credit/Debit Cards (Visa, Mastercard, RuPay)</li>
              <li>UPI (Google Pay, PhonePe, Paytm)</li>
              <li>Net Banking</li>
              <li>Cash on Delivery (COD) - subject to location availability</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.3 Payment Processing</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-900 space-y-2">
              <li>All payments are processed securely through our payment gateway partners</li>
              <li>Payment must be received in full before order dispatch</li>
              <li>For COD orders, payment must be made to the delivery personnel at the time of delivery</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.4 Order Confirmation</h3>
            <p className="text-gray-900 leading-relaxed mb-4">
              You will receive an email confirmation once your order has been successfully placed. This confirmation does not signify acceptance of your order.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Shipping and Delivery</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.1 Delivery Timeline</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-900 space-y-2">
              <li>Standard delivery: 5-7 business days from order confirmation</li>
              <li>Remote areas may require additional time</li>
              <li>Delivery times are estimates and not guaranteed</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.2 Shipping Charges</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-900 space-y-2">
              <li>Free shipping on all water purifiers across India</li>
              <li>Delivery charges may apply for certain remote locations</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.3 Delivery Address</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-900 space-y-2">
              <li>Ensure your delivery address is complete and accurate</li>
              <li>We are not responsible for delays or non-delivery due to incorrect address information</li>
              <li>Address changes after order placement may not be possible</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.4 Delivery Failure</h3>
            <p className="text-gray-900 leading-relaxed mb-3">If delivery cannot be completed due to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-900 space-y-2">
              <li>Incorrect address provided by customer</li>
              <li>Recipient unavailable after multiple attempts</li>
              <li>Refusal to accept delivery</li>
            </ul>
            <p className="text-gray-900 leading-relaxed mb-4">
              We reserve the right to cancel the order or charge redelivery fees.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Installation Services</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">5.1 Free Installation</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-900 space-y-2">
              <li>Professional installation is included free of charge with all water purifiers</li>
              <li>Installation will be scheduled within 24-48 hours of delivery</li>
              <li>Installation includes standard pipes and fittings</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">5.2 Installation Scheduling</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-900 space-y-2">
              <li>Our team will contact you to schedule installation at your preferred date and time</li>
              <li>Please ensure someone is available at the installation address during the scheduled time</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">5.3 Installation Requirements</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-900 space-y-2">
              <li>Adequate water pressure and electrical connection must be available</li>
              <li>Installation location should be accessible and suitable for the product</li>
              <li>Additional charges may apply for non-standard installations or extra fittings</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">5.4 Installation Exclusions</h3>
            <p className="text-gray-900 leading-relaxed mb-3">Free installation does not include:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-900 space-y-2">
              <li>Civil work or wall modifications</li>
              <li>Extra pipes beyond standard requirements (up to 10 feet)</li>
              <li>Installation in locations requiring special equipment</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Warranty</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">6.1 Product Warranty</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-900 space-y-2">
              <li>All products come with a manufacturer's warranty as specified in the product description</li>
              <li>Standard warranty period: 1-2 years depending on the product</li>
              <li>Warranty covers manufacturing defects and functional issues</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">6.2 Warranty Exclusions</h3>
            <p className="text-gray-900 leading-relaxed mb-3">Warranty does not cover:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-900 space-y-2">
              <li>Damage due to misuse, negligence, or accidents</li>
              <li>Unauthorized repairs or modifications</li>
              <li>Normal wear and tear</li>
              <li>Damage due to power surges or improper voltage</li>
              <li>Use of non-genuine spare parts</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">6.3 Warranty Claims</h3>
            <p className="text-gray-900 leading-relaxed mb-3">To claim warranty:</p>
            <ol className="list-decimal pl-6 mb-4 text-gray-900 space-y-2">
              <li>Contact our customer support with proof of purchase</li>
              <li>Our technician will assess the issue</li>
              <li>Repairs or replacements will be provided as per warranty terms</li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Returns and Refunds</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">7.1 Return Policy</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-900 space-y-2">
              <li>Products can be returned within 7 days of delivery</li>
              <li>Products must be unused, in original packaging with all accessories</li>
              <li>Installation must not have been completed</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">7.2 Return Process</h3>
            <p className="text-gray-900 leading-relaxed mb-3">To initiate a return:</p>
            <ol className="list-decimal pl-6 mb-4 text-gray-900 space-y-2">
              <li>Contact customer support within 7 days of delivery</li>
              <li>Provide order details and reason for return</li>
              <li>Our team will arrange product pickup</li>
              <li>Refund will be processed after inspection</li>
            </ol>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">7.3 Refund Processing</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-900 space-y-2">
              <li>Refunds will be processed within 7-10 business days of receiving the returned product</li>
              <li>Refund will be credited to the original payment method</li>
              <li>Shipping charges (if any) are non-refundable</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">7.4 Non-Returnable Items</h3>
            <p className="text-gray-900 leading-relaxed mb-3">The following cannot be returned:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-900 space-y-2">
              <li>Products with completed installation</li>
              <li>Products damaged due to customer misuse</li>
              <li>Products with missing accessories or packaging</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">7.5 Defective Products</h3>
            <p className="text-gray-900 leading-relaxed mb-3">If you receive a defective product:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-900 space-y-2">
              <li>Contact us within 48 hours of delivery</li>
              <li>We will arrange replacement or repair at no additional cost</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Cancellation Policy</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">8.1 Order Cancellation</h3>
            <p className="text-gray-900 leading-relaxed mb-3">You may cancel your order:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-900 space-y-2">
              <li>Before shipment: Full refund</li>
              <li>After shipment but before delivery: Subject to return shipping charges</li>
              <li>After delivery: Subject to return policy</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">8.2 Cancellation by Company</h3>
            <p className="text-gray-900 leading-relaxed mb-3">We reserve the right to cancel orders due to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-900 space-y-2">
              <li>Product unavailability</li>
              <li>Pricing errors</li>
              <li>Suspected fraudulent activity</li>
              <li>Force majeure events</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Contact Information</h2>
            <p className="text-gray-900 leading-relaxed mb-3">
              For questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3"><em>Enpure</em> by DiHydro Tech Innovations</h3>
              <p className="text-gray-700"><strong>Email:</strong> info@enpure.in</p>
              <p className="text-gray-700"><strong>Phone:</strong> +91-70160 38671</p>
              <p className="text-gray-700"><strong>Address:</strong> Surat, Gujarat, India</p>
              <p className="text-gray-700 mt-2"><strong>Customer Support Hours:</strong> Monday to Saturday, 9:00 AM - 6:00 PM IST</p>
            </div>

            <div className="border-t border-gray-300 pt-6 mt-8">
              <p className="text-gray-600 text-center italic">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
            <br/><br/>
            <Link to="/" className="text-blue-600 font-medium hover:text-blue-900">
            ← Back to Home
            </Link>
        </div>
    </article>
    </>  
    );

};

export default Terms;