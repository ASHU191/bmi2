import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check } from "lucide-react"

// This is a sample service detail page
export default function ServiceDetailPage({ params }) {
  const { id } = params

  // In a real application, you would fetch the service data based on the id
  // For now, we'll use sample data
  const service = {
    id: "residential",
    title: "Residential Interior Design Services in Dubai",
    description:
      "Transform your home into a personalized sanctuary with our expert residential interior design services.",
    longDescription:
      "Our residential design services are tailored to create living spaces that reflect your personality, lifestyle, and aesthetic preferences. We work closely with you to understand your needs and vision, and then transform them into beautiful, functional spaces that you'll love coming home to.",
    process: [
      {
        title: "Initial Consultation",
        description:
          "We begin with an in-depth consultation to understand your vision, requirements, budget, and timeline. This helps us establish the foundation for your project.",
      },
      {
        title: "Concept Development",
        description:
          "Based on our consultation, we create design concepts that align with your vision. This includes space planning, color schemes, material selections, and furniture layouts.",
      },
      {
        title: "Design Presentation",
        description:
          "We present our design concepts through mood boards, 3D visualizations, and material samples, allowing you to see how your space will look and feel.",
      },
      {
        title: "Implementation",
        description:
          "Once the design is approved, we coordinate with contractors, vendors, and craftsmen to bring your vision to life, ensuring quality and attention to detail.",
      },
      {
        title: "Final Reveal",
        description:
          "We oversee the final installation and styling of your space, ensuring that every detail is perfect before the final reveal.",
      },
    ],
    features: [
      "Custom furniture and decor selection",
      "Space planning and layout optimization",
      "Color scheme and material selection",
      "Lighting design and implementation",
      "Art and accessory curation",
      "Renovation and remodeling coordination",
      "Smart home integration",
      "Sustainable and eco-friendly options",
    ],
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Modern Living Room",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Contemporary Kitchen",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Master Bedroom Suite",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Luxury Bathroom",
      },
    ],
    testimonials: [
      {
        quote:
          "BMI Interior transformed our house into a dream home. Their attention to detail and understanding of our vision was exceptional.",
        author: "Sarah Johnson",
        location: "New York, NY",
      },
      {
        quote:
          "We couldn't be happier with the results. The team was professional, responsive, and delivered beyond our expectations.",
        author: "Michael Chen",
        location: "Los Angeles, CA",
      },
    ],
  }

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[70vh]">
        <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="max-w-3xl animate-fade-in">
              <Link href="/services" className="inline-flex items-center text-primary mb-4 hover:underline">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Services
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-gray-300">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Service Overview</h2>
              <p className="text-gray-300 mb-8 text-lg">{service.longDescription}</p>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Our Process</h3>
                <div className="space-y-8">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex">
                      <div className="mr-6">
                        <div className="bg-primary text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                          {index + 1}
                        </div>
                        {index < service.process.length - 1 && (
                          <div className="h-24 w-0.5 bg-primary/30 mx-auto mt-2"></div>
                        )}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">What We Offer</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="bg-dark-300 p-6 rounded-lg border border-gray-800 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Contact us today to schedule a consultation and discuss your project requirements.
                </p>
                <Button className="w-full bg-primary text-black hover:bg-primary/80 hover-glow mb-4" asChild>
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button variant="outline" className="w-full border-primary hover:bg-primary/10" asChild>
                  <Link href="/projects">View Related Projects</Link>
                </Button>

                <div className="mt-8 pt-8 border-t border-gray-800">
                  <h4 className="font-bold mb-4">Client Testimonials</h4>
                  <div className="space-y-4">
                    {service.testimonials.map((testimonial, index) => (
                      <div key={index} className="bg-dark-400 p-4 rounded-lg">
                        <p className="text-gray-300 italic mb-2 text-sm">"{testimonial.quote}"</p>
                        <p className="text-sm font-medium">{testimonial.author}</p>
                        <p className="text-xs text-gray-400">{testimonial.location}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.gallery.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in hover-scale"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-bold text-white">{item.alt}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

