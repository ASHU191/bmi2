import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check } from "lucide-react"

export const servicePageTemplate = (serviceData) => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[70vh]">
        <Image src={serviceData.image || "/placeholder.svg"} alt={serviceData.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="max-w-3xl animate-fade-in">
              <Link href="/services" className="inline-flex items-center text-primary mb-4 hover:underline">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Services
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{serviceData.title}</h1>
              <p className="text-xl text-gray-300">{serviceData.description}</p>
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
              <p className="text-gray-300 mb-8 text-lg">{serviceData.longDescription}</p>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Our Process</h3>
                <div className="space-y-8">
                  {serviceData.process.map((step, index) => (
                    <div key={index} className="flex">
                      <div className="mr-6">
                        <div className="bg-primary text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                          {index + 1}
                        </div>
                        {index < serviceData.process.length - 1 && (
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
                  {serviceData.features.map((feature, index) => (
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
                    {serviceData.testimonials.map((testimonial, index) => (
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
            {serviceData.gallery.map((item, index) => (
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

