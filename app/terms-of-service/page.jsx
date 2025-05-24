import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto py-16 px-4">
        <Link href="/" className="inline-flex items-center text-primary mb-8 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-invert max-w-none">
          <p>Last Updated: March 24, 2025</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to BMI Interior. These Terms of Service ("Terms") govern your use of our website, services, and
            products. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any
            part of the terms, you may not access our services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Services</h2>
          <p>
            BMI Interior provides interior design and related services for residential, commercial, and hospitality
            projects. Our services may include but are not limited to design consultation, space planning, 3D
            visualization, furniture design, and project management.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Client Responsibilities</h2>
          <p>
            Clients are responsible for providing accurate information, timely feedback, and necessary access to spaces
            for measurements and installations. Delays caused by client actions or inactions may affect project
            timelines and may incur additional costs.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Payment Terms</h2>
          <p>
            Payment schedules and methods will be outlined in individual client contracts. Generally, a deposit is
            required to begin work, with subsequent payments tied to project milestones. All invoices are due upon
            receipt unless otherwise specified.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Intellectual Property</h2>
          <p>
            All designs, drawings, specifications, and documents prepared by BMI Interior remain our intellectual
            property. Clients are granted a license to use these materials for the specific project only. Reproduction,
            distribution, or use for other purposes requires written permission.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Project Timeline</h2>
          <p>
            While we strive to meet all projected timelines, various factors including supplier delays, permit
            approvals, and unforeseen site conditions may affect completion dates. BMI Interior is not liable for
            delays outside our direct control.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Changes and Modifications</h2>
          <p>
            Changes to the agreed scope of work may affect both timeline and cost. All modifications must be approved in
            writing, and additional fees may apply. BMI Interior reserves the right to adjust pricing for significant
            changes to the original project scope.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Termination</h2>
          <p>
            Either party may terminate the service agreement with written notice. In case of termination, the client is
            responsible for payment of all services rendered up to the termination date. Termination fees may apply as
            outlined in individual contracts.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Limitation of Liability</h2>
          <p>
            BMI Interior' liability is limited to the amount paid for our services. We are not liable for indirect,
            consequential, or incidental damages. We do not guarantee that our services will meet all client
            expectations or achieve specific business outcomes.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Privacy Policy</h2>
          <p>
            Our Privacy Policy, available at{" "}
            <Link href="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            , describes how we collect, use, and protect your personal information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any
            disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Dubai.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">12. Changes to Terms</h2>
          <p>
            BMI Interior reserves the right to modify these Terms at any time. We will provide notice of significant
            changes. Your continued use of our services after such modifications constitutes your acceptance of the
            updated Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">13. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
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

