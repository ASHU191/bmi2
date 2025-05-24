import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto py-16 px-4">
        <Link href="/" className="inline-flex items-center text-primary mb-8 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none">
          <p>Last Updated: March 24, 2025</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p>
            At BMI Interior, we respect your privacy and are committed to protecting your personal data. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or
            engage our services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
          <p>
            We may collect several types of information from and about users of our website and services, including:
          </p>
          <ul className="list-disc pl-6 mt-4 mb-4">
            <li>Personal identifiers such as name, email address, phone number, and mailing address</li>
            <li>Communication preferences and correspondence history</li>
            <li>Project details and requirements</li>
            <li>Payment information (processed securely through third-party payment processors)</li>
            <li>Usage data such as IP address, browser type, device information, and pages visited</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Collect Information</h2>
          <p>We collect information directly from you when you:</p>
          <ul className="list-disc pl-6 mt-4 mb-4">
            <li>Fill out forms on our website</li>
            <li>Subscribe to our newsletter</li>
            <li>Request a consultation or quote</li>
            <li>Correspond with us by phone, email, or otherwise</li>
            <li>Engage our services</li>
          </ul>
          <p>
            We also collect information automatically as you navigate through our website using cookies and similar
            technologies.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including:</p>
          <ul className="list-disc pl-6 mt-4 mb-4">
            <li>Providing and personalizing our services</li>
            <li>Processing transactions and managing your account</li>
            <li>Communicating with you about our services, promotions, and events</li>
            <li>Responding to your inquiries and requests</li>
            <li>Improving our website, products, and services</li>
            <li>Analyzing usage patterns and trends</li>
            <li>Protecting our rights and preventing fraud</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Information Sharing and Disclosure</h2>
          <p>We may share your information with:</p>
          <ul className="list-disc pl-6 mt-4 mb-4">
            <li>Service providers and contractors who perform services on our behalf</li>
            <li>Professional advisors such as lawyers, accountants, and insurers</li>
            <li>Government authorities when required by law</li>
            <li>Business partners with your consent</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information from
            unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the
            Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Your Rights and Choices</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6 mt-4 mb-4">
            <li>Accessing, correcting, or deleting your information</li>
            <li>Withdrawing consent for certain processing activities</li>
            <li>Restricting or objecting to certain uses of your information</li>
            <li>Requesting portability of your information</li>
            <li>Opting out of marketing communications</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided in the "Contact Us" section.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to collect information about your browsing activities. You
            can control cookies through your browser settings and other tools. However, disabling cookies may limit your
            ability to use certain features of our website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites or services. We are not responsible for the privacy
            practices or content of these third parties. We encourage you to review the privacy policies of any
            third-party sites you visit.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
            information from children. If you believe we have inadvertently collected information from a child, please
            contact us immediately.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">11. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your country of residence.
            These countries may have different data protection laws. We will take appropriate measures to ensure that
            your personal information remains protected in accordance with this Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">12. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
            "Last Updated" date. We encourage you to review this Privacy Policy periodically.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">13. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us
            at:
          </p>
          <p>
            BMI Interior
            <br />
            6B street, Opposite Carnab,
            <br />
            Vachi Storage, Al-Qouz Industrial Area 3 - Dubai
            <br />
            Email: info@bmiinterior.com
            <br />
            Phone: +971 553-681-813
          </p>
        </div>
      </div>
    </div>
  )
}

