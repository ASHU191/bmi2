import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Phone, Mail, MapPin } from "lucide-react"

export default function CompanyProfilePage() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto py-16 px-4">
        <Link href="/" className="inline-flex items-center text-primary mb-8 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
        </Link>

        <div className="flex flex-col items-center justify-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-center">
            <span className="text-primary">BMI</span> Interior Company Profile
          </h1>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl text-center">
            Premium Interior Design Solutions for Residential and Commercial Spaces
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">About BMI Interior</h2>
              <p>
                BMI Interior is a premier interior design firm based in Dubai, specializing in creating exceptional
                spaces that combine aesthetics, functionality, and innovation. With over 12 years of experience in the
                industry, we have established ourselves as a trusted partner for clients seeking premium interior design
                solutions.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Our Vision</h2>
              <p>
                To be the most trusted and sought-after interior design firm, recognized for our creativity, integrity,
                and commitment to excellence. We aim to set new standards in the industry and make a positive impact on
                the way people experience and interact with their environments.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
              <p>
                Our mission is to transform spaces into extraordinary experiences through innovative design, exceptional
                craftsmanship, and personalized service. We strive to exceed our clients' expectations by delivering
                solutions that are not only aesthetically pleasing but also functional and tailored to their specific
                needs.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Our Services</h2>
              <ul className="list-disc pl-6">
                <li>Residential Interior Design</li>
                <li>Commercial Interior Design</li>
                <li>3D Visualization</li>
                <li>Furniture Design</li>
                <li>Renovation & Remodeling</li>
                <li>Design Consultation</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Our Approach</h2>
              <p>
                At BMI Interior, we follow a structured approach to ensure that every project is completed to the
                highest standards and meets our clients' expectations:
              </p>
              <ol className="list-decimal pl-6">
                <li>
                  <strong>Consultation:</strong> We begin with an in-depth consultation to understand your vision,
                  requirements, and budget.
                </li>
                <li>
                  <strong>Concept Development:</strong> Our designers create a concept that aligns with your vision and
                  incorporates innovative design solutions.
                </li>
                <li>
                  <strong>Design Implementation:</strong> Once the concept is approved, we move forward with detailed
                  plans, material selection, and procurement.
                </li>
                <li>
                  <strong>Final Installation:</strong> We oversee the installation process to ensure that everything is
                  executed according to plan.
                </li>
              </ol>
            </div>
          </div>

          <div>
            <div className="bg-dark-300 p-6 rounded-lg border border-gray-800 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Company Information</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-300">
                      6B street, Opposite Carnab,
                      <br />
                      Vachi Storage, Al-Qouz Industrial Area 3 - Dubai
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+971553681813" className="text-gray-300 hover:text-primary transition-colors">
                      +971 553-681-813
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:info@bmiinterior.com"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      info@bmiinterior.com
                    </a>
                  </div>
                </div>
              </div>

              <Button
  className="w-full bg-primary text-black hover:bg-primary/80 hover-glow flex items-center justify-center"
  asChild
>
  <a
    href="https://drive.google.com/file/d/1M5PQOprMsYtLF65ODpdaursK5-7cMV0p/view"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Download className="h-4 w-4 mr-2" /> Download PDF Version
  </a>
</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-dark-300 p-6 rounded-lg border border-gray-800 text-center">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <p className="text-gray-300">Projects Completed</p>
          </div>

          <div className="bg-dark-300 p-6 rounded-lg border border-gray-800 text-center">
            <div className="text-4xl font-bold text-primary mb-2">19+</div>
            <p className="text-gray-300">Years of Experience</p>
          </div>

          <div className="bg-dark-300 p-6 rounded-lg border border-gray-800 text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <p className="text-gray-300">Happy Clients</p>
          </div>

          <div className="bg-dark-300 p-6 rounded-lg border border-gray-800 text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <p className="text-gray-300">Design Awards</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Start Your Project?</h2>
          <Button className="bg-primary text-black hover:bg-primary/80 hover-glow" asChild>
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

