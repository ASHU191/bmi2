import { servicePageTemplate } from "@/components/service-page-template"

export default function CommercialDesignPage() {
  const serviceData = {
    id: "commercial",
    title: "Commercial Interior Design in UAE",
    description: "Create impressive commercial spaces that enhance productivity and reflect your brand identity.",
    longDescription:
      "Our commercial design services are tailored to create functional, aesthetically pleasing workspaces that enhance productivity, reflect your brand identity, and impress clients and employees alike. We understand the unique challenges of commercial spaces and provide solutions that balance form and function.",
    process: [
      {
        title: "Initial Consultation",
        description:
          "We begin with an in-depth consultation to understand your business needs, brand identity, and workspace requirements.",
      },
      {
        title: "Space Planning",
        description:
          "We develop detailed space plans that optimize workflow, accommodate growth, and create a cohesive environment.",
      },
      {
        title: "Design Development",
        description:
          "Our team creates design concepts that align with your brand and business objectives, including material selections, color schemes, and furniture layouts.",
      },
      {
        title: "Implementation",
        description:
          "We coordinate with contractors, vendors, and your team to ensure a smooth implementation process with minimal disruption to your business.",
      },
      {
        title: "Final Reveal",
        description:
          "We oversee the final installation and styling of your space, ensuring that every detail meets our high standards before handover.",
      },
    ],
    features: [
      "Office space planning and design",
      "Retail store layout and visual merchandising",
      "Restaurant and hospitality design",
      "Corporate branding integration",
      "Ergonomic workspace solutions",
      "Sustainable and eco-friendly options",
      "Technology integration",
      "Custom furniture and millwork",
    ],
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Modern Office Space",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Retail Store Design",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Corporate Meeting Room",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Restaurant Interior",
      },
    ],
    testimonials: [
      {
        quote:
          "BMI Interior transformed our office into a space that truly represents our brand and enhances our team's productivity.",
        author: "Michael Chen",
        location: "CEO, Tech Innovations",
      },
      {
        quote:
          "The retail store design they created has significantly improved our customer experience and increased sales.",
        author: "Emily Rodriguez",
        location: "Owner, Boutique Retail",
      },
    ],
  }

  return servicePageTemplate(serviceData)
}

