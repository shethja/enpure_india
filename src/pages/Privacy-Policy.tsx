import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
return (
      <>
          <article className="py-16 bg-white text-slate-900">
              <div className="container mx-auto px-4 max-w-4xl">
                  <h1 className="text-5xl font-light mb-3">Privacy Policy</h1>
                  <br/>
                  <p className="text-blue-500 text-md mb-3">
                    <strong>Last Updated:</strong> October 28, 2025
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    At <em>Enpure</em> by DiHydro Tech Innovation, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or purchase our products.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">1. Information We Collect</h2>
                    
                    <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">1.1 Personal Information</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                    We collect personal information that you voluntarily provide when you:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Create an account</li>
                    <li>Place an order</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Contact customer support</li>
                    <li>Participate in surveys or promotions</li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed mb-3">This information may include:</p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Shipping and billing address</li>
                    <li>Payment information</li>
                    <li>Date of birth (if provided)</li>
                    </ul>

                    <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">1.2 Automatic Information Collection</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                    When you visit our website, we automatically collect certain information:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring website</li>
                    <li>Geographic location (city/state level)</li>
                    <li>Cookies and tracking technologies</li>
                    </ul>

                    <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">1.3 Order and Transaction Information</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">When you make a purchase, we collect:</p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Product details</li>
                    <li>Order history</li>
                    <li>Payment method (card details are processed securely and not stored on our servers)</li>
                    <li>Transaction amount</li>
                    <li>Installation preferences</li>
                    <li>Service history</li>
                    </ul>

                    <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">1.4 Communication Data</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">We collect information from:</p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Customer support inquiries</li>
                    <li>Email correspondence</li>
                    <li>Chat conversations</li>
                    <li>Feedback and reviews</li>
                    <li>Service requests</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">2. How We Use Your Information</h2>
                    
                    <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">2.1 Order Processing and Fulfillment</h3>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Process and complete your orders</li>
                    <li>Arrange product delivery and installation</li>
                    <li>Send order confirmations and updates</li>
                    <li>Process payments and prevent fraud</li>
                    <li>Issue invoices and receipts</li>
                    </ul>

                    <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">2.2 Customer Service</h3>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Respond to your inquiries and support requests</li>
                    <li>Provide warranty and after-sales service</li>
                    <li>Schedule maintenance visits</li>
                    <li>Resolve complaints and disputes</li>
                    <li>Send service reminders and notifications</li>
                    </ul>

                    <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">2.3 Marketing and Communication</h3>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Send promotional offers and product updates (with your consent)</li>
                    <li>Inform you about new products and features</li>
                    <li>Provide personalized recommendations</li>
                    <li>Send newsletters and educational content</li>
                    <li>Conduct surveys and market research</li>
                    </ul>

                    <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">2.4 Website Improvement</h3>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Analyze website usage and performance</li>
                    <li>Improve user experience and functionality</li>
                    <li>Develop new products and services</li>
                    <li>Conduct research and analytics</li>
                    <li>Prevent technical issues</li>
                    </ul>

                    <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">2.5 Legal and Security</h3>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Comply with legal obligations</li>
                    <li>Prevent fraud and unauthorized transactions</li>
                    <li>Protect against security threats</li>
                    <li>Enforce our Terms and Conditions</li>
                    <li>Resolve disputes and legal claims</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">3. Legal Basis for Processing</h2>
                    <p className="text-gray-700 leading-relaxed mb-3">
                    We process your personal information based on:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li><strong>Contract Performance:</strong> To fulfill our obligations in providing products and services</li>
                    <li><strong>Consent:</strong> When you opt-in to marketing communications</li>
                    <li><strong>Legitimate Interest:</strong> To improve our services and prevent fraud</li>
                    <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">4. Information Sharing and Disclosure</h2>
                    
                    <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">4.1 We DO NOT Sell Your Information</h3>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                    <p className="text-gray-800 font-semibold">
                        We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                    </p>
                    </div>

                    <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">4.2 Service Providers</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                    We may share your information with trusted third-party service providers who assist us in:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Payment processing (payment gateways)</li>
                    <li>Shipping and logistics</li>
                    <li>Installation services</li>
                    <li>Email marketing platforms</li>
                    <li>Analytics and website hosting</li>
                    <li>Customer relationship management (CRM)</li>
                    <li>Cloud storage services</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mb-4">
                    These service providers are contractually obligated to protect your information and use it only for specified purposes.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.3 Business Transfers</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity, subject to this Privacy Policy.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.4 Legal Requirements</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                    We may disclose your information when required by law or to:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Comply with legal processes (court orders, subpoenas)</li>
                    <li>Enforce our Terms and Conditions</li>
                    <li>Protect our rights, property, or safety</li>
                    <li>Investigate fraud or security issues</li>
                    <li>Respond to government requests</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Security</h2>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.1 Security Measures</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                    We implement appropriate technical and organizational measures to protect your information:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>Secure payment gateway integration</li>
                    <li>Regular security audits and updates</li>
                    <li>Access controls and authentication</li>
                    <li>Firewall protection</li>
                    <li>Data backup and recovery systems</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.2 Payment Security</h3>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>We do not store complete credit/debit card information</li>
                    <li>Payment data is encrypted and processed through PCI-DSS compliant payment gateways</li>
                    <li>Card details are tokenized for security</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.3 Employee Access</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                    Access to personal information is restricted to authorized employees who need it to perform their duties. All employees are trained on data privacy and security.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.1 What Are Cookies?</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                    Cookies are small text files stored on your device that help us improve your experience on our website.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.2 Types of Cookies We Use</h3>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Essential Cookies</h4>
                    <p className="text-gray-700 mb-2">Required for website functionality:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Session management</li>
                        <li>Shopping cart functionality</li>
                        <li>User authentication</li>
                    </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Performance Cookies</h4>
                    <p className="text-gray-700 mb-2">Help us understand website usage:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Analytics (Google Analytics)</li>
                        <li>Page load times</li>
                        <li>Error tracking</li>
                    </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Functional Cookies</h4>
                    <p className="text-gray-700 mb-2">Enhance user experience:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Language preferences</li>
                        <li>Location settings</li>
                        <li>Remember user choices</li>
                    </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Marketing Cookies</h4>
                    <p className="text-gray-700 mb-2">Used for advertising and marketing:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Retargeting campaigns</li>
                        <li>Social media integration</li>
                        <li>Interest-based advertising</li>
                    </ul>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.3 Cookie Management</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                    You can control cookies through your browser settings:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Block all cookies</li>
                    <li>Accept only certain cookies</li>
                    <li>Delete existing cookies</li>
                    <li>Receive notifications when cookies are set</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Note:</strong> Disabling essential cookies may affect website functionality.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Your Privacy Rights</h2>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7.1 Access and Correction</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">You have the right to:</p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Access your personal information</li>
                    <li>Request corrections to inaccurate data</li>
                    <li>Update your account information</li>
                    <li>View your order history</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7.2 Data Portability</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                    You can request a copy of your personal data in a structured, commonly used format.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7.3 Deletion and Erasure</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                    You can request deletion of your personal information, subject to:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Legal retention requirements</li>
                    <li>Ongoing transactions or disputes</li>
                    <li>Legitimate business interests</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7.4 Marketing Opt-Out</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                    You can unsubscribe from marketing communications:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Click "Unsubscribe" link in emails</li>
                    <li>Update email preferences in your account</li>
                    <li>Contact customer support</li>
                    <li>Opt-out of SMS marketing by replying STOP</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7.5 Objection and Restriction</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                    You can object to or request restriction of certain data processing activities.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7.6 Lodge a Complaint</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                    If you believe your privacy rights have been violated, you can file a complaint with the appropriate data protection authority in your jurisdiction.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Data Retention</h2>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">8.1 Retention Periods</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                    We retain your information for as long as necessary to:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Fulfill the purposes described in this policy</li>
                    <li>Comply with legal obligations (typically 7 years for financial records)</li>
                    <li>Resolve disputes</li>
                    <li>Enforce our agreements</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">8.2 Account Deletion</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">When you request account deletion:</p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Active data is removed within 30 days</li>
                    <li>Backup data may persist for up to 90 days</li>
                    <li>Legal records are retained as required by law</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Children's Privacy</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                    Our website and services are not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. International Data Transfers</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Third-Party Links</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Changes to Privacy Policy</h2>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">12.1 Policy Updates</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                    We may update this Privacy Policy from time to time. Changes will be effective immediately upon posting on our website.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">12.2 Notification of Changes</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">For material changes, we will:</p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Update the "Last Updated" date</li>
                    <li>Send email notification to registered users</li>
                    <li>Display a prominent notice on our website</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">12.3 Continued Use</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                    Your continued use of our website after changes constitutes acceptance of the updated Privacy Policy.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Contact Us</h2>
                    
                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Privacy Questions</h3>
                    <p className="text-gray-700 mb-2">For questions about this Privacy Policy or our privacy practices:</p>
                    <p className="text-gray-700"><strong>Email:</strong> privacy@enpure.com</p>
                    <p className="text-gray-700"><strong>Phone:</strong> +91-70160 38671</p>
                    <p className="text-gray-700"><strong>Address:</strong> DiHydro Tech Innovations, Surat, Gujarat, India</p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Data Protection Officer</h3>
                    <p className="text-gray-700 mb-2">For GDPR-related inquiries:</p>
                    <p className="text-gray-700"><strong>Email:</strong> dpo@enpure.com</p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Privacy Rights Requests</h3>
                    <p className="text-gray-700 mb-3">To exercise your privacy rights:</p>
                    <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                        <li>Email your request to privacy@enpure.com</li>
                        <li>Include your full name, email, and order number (if applicable)</li>
                        <li>Specify the right you wish to exercise</li>
                        <li>We will respond within 30 days</li>
                    </ol>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Customer Support</h3>
                    <p className="text-gray-700 mb-2">For general inquiries:</p>
                    <p className="text-gray-700"><strong>Email:</strong> support@enpure.com</p>
                    <p className="text-gray-700"><strong>Hours:</strong> Monday to Saturday, 9:00 AM - 6:00 PM IST</p>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Security Incident Reporting</h2>
                    <p className="text-gray-700 leading-relaxed mb-3">
                    If you suspect a security breach or unauthorized access to your account:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Change your password immediately</li>
                    <li>Contact us at security@enpure.com</li>
                    <li>Monitor your account for suspicious activity</li>
                    </ul>

                    <div className="border-t border-gray-300 pt-6 mt-8">
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                        <p className="text-gray-800 font-semibold mb-2">Your privacy matters to us.</p>
                        <p className="text-gray-700">
                        We are committed to protecting your personal information and being transparent about our data practices.
                        </p>
                    </div>
                    </div>

                    <div className="mt-6 text-center">
                    <p className="text-gray-600 text-sm">
                        © 2024 Enpure Water Solutions. All rights reserved.
                    </p>
                    </div>

                <br/> <br/>
                  <Link to="/" className="text-blue-600 font-medium hover:text-blue-900">
                  ← Back to Home
                  </Link>
              </div>
          </article>
          </>  
          );

};

export default PrivacyPolicy;