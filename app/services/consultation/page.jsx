import { servicePageTemplate } from "@/components/service-page-template"

export default function ConsultationPage() {
  const serviceData = {
    id: "consultation",
    title: "Design Consultation",
    description: "Get expert advice and guidance for your design project with our professional consultation services.",
    longDescription:
      "Our design consultation service provides expert advice and guidance to help you make informed decisions about your interior design project. Whether you're planning a full renovation or simply looking to refresh your space, our experienced designers will provide valuable insights and recommendations tailored to your specific needs and budget.",
    process: [
      {
        title: "Initial Contact",
        description:
          "We begin with a brief discussion about your project needs, timeline, and budget to determine how we can best assist you.",
      },
      {
        title: "On-Site Assessment",
        description:
          "Our designer visits your space to evaluate the existing conditions, take measurements, and discuss your vision and requirements in detail.",
      },
      {
        title: "Design Recommendations",
        description:
          "Based on our assessment, we provide tailored recommendations for space planning, color schemes, materials, furniture, and more.",
      },
      {
        title: "Resource Guidance",
        description:
          "We provide guidance on sourcing materials, furniture, and accessories, including vendor recommendations and budget considerations.",
      },
      {
        title: "Follow-Up Support",
        description:
          "We offer follow-up support to answer questions and provide additional guidance as you implement our recommendations.",
      },
    ],
    features: [
      "On-site design assessment",
      "Color and material recommendations",
      "Furniture layout and space planning",
      "Budget planning and cost estimation",
      "Vendor and contractor recommendations",
      "Shopping assistance and sourcing",
      "Styling and accessory guidance",
      "Implementation support",
    ],
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Design Consultation Session",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Material Selection",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Space Planning",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Color Consultation",
      },
    ],
    testimonials: [
      {
        quote:
          "The design consultation was incredibly valuable. The designer provided insights and solutions we never would have thought of on our own.",
        author: "Rebecca Thompson",
        location: "Homeowner",
      },
      {
        quote:
          "The consultation saved us time and money by helping us avoid costly mistakes and make confident design decisions.",
        author: "Mark Johnson",
        location: "Renovation Client",
      },
    ],
  }

  return servicePageTemplate(serviceData)
}

