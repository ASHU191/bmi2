import { servicePageTemplate } from "@/components/service-page-template"

export default function FurnitureDesignPage() {
  const serviceData = {
    id: "furniture",
    title: "Furniture Design",
    description: "Custom furniture solutions designed to perfectly fit your space and style requirements.",
    longDescription:
      "Our furniture design service offers bespoke solutions that perfectly complement your space and reflect your personal style. From concept to creation, we work with skilled craftsmen to design and produce custom furniture pieces that are both beautiful and functional, ensuring that each item is tailored to your specific needs and preferences.",
    process: [
      {
        title: "Design Consultation",
        description:
          "We discuss your furniture needs, style preferences, and functional requirements to understand your vision.",
      },
      {
        title: "Concept Development",
        description:
          "Our designers create detailed sketches and 3D models of custom furniture pieces that align with your space and style.",
      },
      {
        title: "Material Selection",
        description:
          "We help you select the perfect materials, finishes, and upholstery that balance aesthetics, durability, and comfort.",
      },
      {
        title: "Prototype and Refinement",
        description:
          "For complex pieces, we may create prototypes or samples to ensure the design meets your expectations before full production.",
      },
      {
        title: "Fabrication and Installation",
        description:
          "We work with skilled craftsmen to fabricate your custom furniture and oversee the installation in your space.",
      },
    ],
    features: [
      "Custom furniture design and fabrication",
      "Built-in cabinetry and storage solutions",
      "Material and finish selection",
      "Upholstery and textile coordination",
      "Antique restoration and refinishing",
      "Sustainable and eco-friendly options",
      "Ergonomic design considerations",
      "Multi-functional furniture solutions",
    ],
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Custom Dining Table",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Built-in Cabinetry",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Custom Sofa Design",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Bespoke Bedroom Furniture",
      },
    ],
    testimonials: [
      {
        quote:
          "The custom dining table BMI designed for us is not just a piece of furniture, it's a work of art that perfectly fits our space.",
        author: "Robert Thompson",
        location: "Homeowner",
      },
      {
        quote:
          "Their attention to detail and craftsmanship is exceptional. The built-in cabinetry they designed has transformed our living space.",
        author: "Jennifer Adams",
        location: "Interior Design Client",
      },
    ],
  }

  return servicePageTemplate(serviceData)
}

