"use client"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Send } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const phoneNumber = "971553681813" // The WhatsApp number to message

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Format the message for WhatsApp
    const whatsappMessage = `
*New Contact Form Submission*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}
*Message:* ${formData.message}
  `.trim()

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")

    // Reset form and show success message
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1000)
  }

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/41f4fe225869163.6824a5df9fab4.jpg?height=1080&width=1920" alt="Contact Us" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get in touch with our team to discuss your project or schedule a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-dark-300 border-gray-800 hover-glow animate-fade-in">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Our Location</h3>
                <p className="text-gray-300">
                  6B street, Opposite Carnab,
                  <br />
                  Vachi Storage, Al-Qouz Industrial Area 3 - Dubai
                </p>
              </CardContent>
            </Card>

            <Card className="bg-dark-300 border-gray-800 hover-glow animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone & Email</h3>
                <p className="text-gray-300 mb-2">
                  <a href="tel:+971553681813" className="hover:text-primary transition-colors">
                    +971 553-681-813
                  </a>
                </p>
                <p className="text-gray-300">
                  <a href="mailto:info@bmiinterior.com" className="hover:text-primary transition-colors">
                    info@bmiinterior.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-dark-300 border-gray-800 hover-glow animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Working Hours</h3>
                <p className="text-gray-300">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  {/* Contact Form */}
  <div className="animate-fade-in lg:col-span-2 flex justify-center">
    <div className="max-w-2xl w-full">
      <h2 className="text-3xl font-bold mb-2">
        Send Us a <span className="text-primary">Message</span>
      </h2>
      <div className="w-20 h-1 bg-primary mb-6"></div>
      <p className="text-gray-300 mb-8">
        Fill out the form below and we'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name *
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-dark-400 border-gray-700 focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Your Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-dark-400 border-gray-700 focus:border-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-dark-400 border-gray-700 focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject *
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-dark-400 border-gray-700 focus:border-primary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Your Message *
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="bg-dark-400 border-gray-700 focus:border-primary"
          />
        </div>

        {submitSuccess && (
          <div className="bg-green-900/30 border border-green-500 text-green-300 px-4 py-3 rounded">
            Your message has been sent successfully. We'll get back to you soon!
          </div>
        )}

        {/* <Button
          type="submit"
          className="bg-primary text-black hover:bg-primary/80 hover-glow w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center">
              Send Message <Send className="ml-2 h-4 w-4" />
            </span>
          )}
        </Button> */}

        <div className="flex justify-center mt-4">
          <Button
            type="button"
            onClick={() => {
              if (formData.name && formData.email && formData.subject && formData.message) {
                handleSubmit({ preventDefault: () => {} })
              } else {
                alert("Please fill out all required fields before sending via WhatsApp")
              }
            }}
            className="bg-green-600 hover:bg-green-700 text-white w-full flex items-center justify-center"
          >
            <FaWhatsapp className="mr-2 h-5 w-5" /> Send via WhatsApp
          </Button>
        </div>
      </form>
    </div>
  </div>

  {/* Map */}
  {/* <div className="animate-fade-in">
    <h2 className="text-3xl font-bold mb-2">
      Find Us on the <span className="text-primary">Map</span>
    </h2>
    <div className="w-20 h-1 bg-primary mb-6"></div>
    <p className="text-gray-300 mb-8">
      Visit our office to discuss your project in person or schedule a virtual consultation if you're unable
      to visit.
    </p>
    <div className="relative h-96 rounded-lg overflow-hidden gold-border">
      <Image
        src="/placeholder.svg?height=600&width=800"
        alt="Office Location Map"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-dark-300/90 p-4 rounded-lg">
          <p className="text-center">Interactive map loading...</p>
          <p className="text-center text-primary mt-2">BMI Interior</p>
        </div>
      </div>
    </div>
  </div> */}
</div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-2">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300">Find answers to common questions about our services and process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What is the typical timeline for a design project?",
                answer:
                  "Project timelines vary depending on scope and complexity. A typical residential project can take 3-6 months from concept to completion, while commercial projects may take 6-12 months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "How much does interior design cost?",
                answer:
                  "Our pricing is customized based on the scope of your project. We offer various service packages to accommodate different budgets. During our consultation, we'll discuss your needs and provide a detailed proposal with transparent pricing.",
              },
              {
                question: "Do you work with clients remotely?",
                answer:
                  "Yes, we offer virtual design services for clients who are unable to meet in person. Through video consultations, digital mood boards, and 3D visualizations, we can collaborate effectively regardless of location.",
              },
              {
                question: "Can you work with my existing furniture and decor?",
                answer:
                  "We're happy to incorporate your existing pieces into the new design. We'll assess what works with the new concept and make recommendations for what to keep, repurpose, or replace.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="bg-dark-300 border-gray-800 hover-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

