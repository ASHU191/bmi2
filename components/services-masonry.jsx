"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const services = [
  {
    id: "residential",
    title: "Residential Design",
    description:
      "Transform your home into a personalized sanctuary with our expert residential interior design services.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-blue-500/20 to-purple-500/20",
    icon: "🏠",
  },
  {
    id: "commercial",
    title: "Commercial Design",
    description: "Create impressive commercial spaces that enhance productivity and reflect your brand identity.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-green-500/20 to-teal-500/20",
    icon: "🏢",
  },
  {
    id: "3d-visualization",
    title: "3D Visualization",
    description: "Experience your space before it's built with our photorealistic 3D visualization services.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-orange-500/20 to-red-500/20",
    icon: "🎨",
  },
  {
    id: "furniture",
    title: "Furniture Design",
    description: "Custom furniture solutions designed to perfectly fit your space and style requirements.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-pink-500/20 to-rose-500/20",
    icon: "🪑",
  },
  {
    id: "renovation",
    title: "Renovation & Remodeling",
    description: "Breathe new life into existing spaces with our comprehensive renovation and remodeling services.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-yellow-500/20 to-amber-500/20",
    icon: "🔨",
  },
  {
    id: "consultation",
    title: "Design Consultation",
    description: "Get expert advice and guidance for your design project with our professional consultation services.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-indigo-500/20 to-violet-500/20",
    icon: "💡",
  },
]

const ServicesMasonry = () => {
  const [columns, setColumns] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1)
      } else if (window.innerWidth < 1024) {
        setColumns(2)
      } else {
        setColumns(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Distribute services into columns
  const getColumnServices = () => {
    const result = Array.from({ length: columns }, () => [])

    services.forEach((service, index) => {
      result[index % columns].push(service)
    })

    return result
  }

  const columnServices = getColumnServices()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {columnServices.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col gap-6">
          {column.map((service, serviceIndex) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <Link href={`/services/${service.id}`} className="block">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 z-10`}></div>
                <div className="relative aspect-[4/3] md:aspect-auto md:h-72">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="mb-4 text-4xl">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex items-center text-primary font-medium transform translate-x-0 group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ServicesMasonry

