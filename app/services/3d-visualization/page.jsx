import { servicePageTemplate } from "@/components/service-page-template"

export default function VisualizationPage() {
  const serviceData = {
    id: "3d-visualization",
    title: "3D Visualization",
    description: "Experience your space before it's built with our photorealistic 3D visualization services.",
    longDescription:
      "Our 3D visualization services allow you to experience your space before it's built. Using advanced rendering technology, we create photorealistic images and animations that bring your design to life, helping you make informed decisions and visualize the final result with confidence.",
    process: [
      {
        title: "Project Brief",
        description:
          "We gather all necessary information about your project, including floor plans, design concepts, and specific requirements.",
      },
      {
        title: "3D Modeling",
        description:
          "Our visualization specialists create detailed 3D models of your space, incorporating architectural elements, furniture, and decor.",
      },
      {
        title: "Material and Lighting Setup",
        description:
          "We apply realistic materials, textures, and lighting to create an authentic representation of your space.",
      },
      {
        title: "Rendering and Post-Production",
        description:
          "We render high-resolution images and apply post-production techniques to enhance realism and visual appeal.",
      },
      {
        title: "Revisions and Final Delivery",
        description:
          "We make any necessary adjustments based on your feedback and deliver the final visualizations in your preferred format.",
      },
    ],
    features: [
      "Photorealistic 3D renderings",
      "Virtual reality walkthroughs",
      "Conceptual design visualization",
      "Material and finish previews",
      "Lighting simulation",
      "Exterior and interior visualization",
      "Animation and video presentations",
      "Interactive 360° panoramas",
    ],
    image: "/placeholder.svg?height=800&width=1200",
    gallery: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Living Room Visualization",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Office Space Rendering",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Kitchen Design Visualization",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Exterior Rendering",
      },
    ],
    testimonials: [
      {
        quote:
          "The 3D visualizations helped us understand exactly how our space would look, which made decision-making much easier.",
        author: "Sarah Johnson",
        location: "Homeowner",
      },
      {
        quote:
          "The quality of the renderings was exceptional. Our investors were impressed with the level of detail and realism.",
        author: "David Wilson",
        location: "Property Developer",
      },
    ],
  }

  return servicePageTemplate(serviceData)
}

