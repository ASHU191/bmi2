import { servicePageTemplate } from "@/components/service-page-template"

export default function RenovationPage() {
  const serviceData = {
    id: "renovation",
    title: "Renovation & Remodeling",
    description: "Breathe new life into existing spaces with our comprehensive renovation and remodeling services.",
    longDescription:
      "Our renovation and remodeling services transform outdated or inefficient spaces into beautiful, functional environments that meet your current needs and lifestyle. Whether you're looking to update a single room or completely reimagine your entire home or commercial space, our team provides end-to-end solutions from concept to completion.",
    process: [
      {
        title: "Initial Assessment",
        description:
          "We evaluate your existing space, identify challenges and opportunities, and discuss your renovation goals and budget.",
      },
      {
        title: "Design Development",
        description:
          "Our designers create detailed plans for your renovation, including layout changes, material selections, and fixture specifications.",
      },
      {
        title: "Project Planning",
        description:
          "We develop a comprehensive project timeline, coordinate with contractors, and obtain necessary permits to ensure a smooth process.",
      },
      {
        title: "Construction and Implementation",
        description:
          "Our team oversees the renovation process, managing contractors and ensuring quality workmanship throughout the project.",
      },
      {
        title: "Final Reveal",
        description:
          "We complete the finishing touches, style the space, and present your newly renovated area, ensuring it meets our high standards and your expectations.",
      },
    ],
    features: [
      "Kitchen and bathroom remodeling",
      "Structural modifications and space reconfiguration",
      "Flooring and wall treatments",
      "Lighting and electrical upgrades",
      "Plumbing fixtures and hardware selection",
      "Custom cabinetry and built-ins",
      "Material and finish upgrades",
      "Smart home integration",
    ],
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Kitchen Renovation",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Bathroom Remodel",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Living Room Transformation",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Office Renovation",
      },
    ],
    testimonials: [
      {
        quote:
          "BMI Interior transformed our outdated kitchen into a modern, functional space that has become the heart of our home.",
        author: "Lisa Martinez",
        location: "Homeowner",
      },
      {
        quote:
          "The renovation process was seamless from start to finish. Their attention to detail and project management skills are exceptional.",
        author: "James Wilson",
        location: "Commercial Client",
      },
    ],
  }

  return servicePageTemplate(serviceData)
}

