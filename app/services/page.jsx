import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ServicesCarousel from "@/components/services-carousel"

export default function ServicesPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/51d590225869163.6824a5dfab17f.jpg?height=1080&width=1920" alt="Our Services" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive interior design solutions tailored to your specific needs and vision.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-2">
              What We <span className="text-primary">Offer</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300">
              From concept development to final installation, we provide end-to-end interior design services to bring
              your vision to life.
            </p>
          </div>

          <ServicesCarousel />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-2">
              Our <span className="text-primary">Process</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300">
              We follow a structured approach to ensure that every project is completed to the highest standards and
              meets our clients' expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We begin with an in-depth consultation to understand your vision, requirements, and budget.",
              },
              {
                step: "02",
                title: "Concept Development",
                description:
                  "Our designers create a concept that aligns with your vision and incorporates innovative design solutions.",
              },
              {
                step: "03",
                title: "Design Implementation",
                description:
                  "Once the concept is approved, we move forward with detailed plans, material selection, and procurement.",
              },
              {
                step: "04",
                title: "Final Installation",
                description:
                  "We oversee the installation process to ensure that everything is executed according to plan.",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="bg-dark-300 border-gray-800 overflow-hidden hover-glow animate-fade-in rounded-xl p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl font-bold text-primary/20 mb-4">{process.step}</div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/37980d225869163.6824a5dfa3bf9.jpg?height=1000&width=2000" alt="Background Pattern" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and let's bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-primary text-black hover:bg-primary/80 hover-glow text-lg px-6 py-6" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                variant="outline"
                className="border-primary text-white hover:bg-primary/10 text-lg px-6 py-6"
                asChild
              >
                <Link href="/projects">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

