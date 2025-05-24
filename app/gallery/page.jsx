"use client"
import { useState } from "react"
import Image from "next/image"
import MasonryGallery from "@/components/masonry-gallery"

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const galleryItems = [
    {
      id: 1,
      category: "residential",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/71e4fc181500725.651d2db38123b.png",
      title: "Modern Living Room",
    },
    {
      id: 2,
      category: "commercial",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/6a435e214915005.67611dcf3ce57.png?height=600&width=800",
      title: "Corporate Office Space",
    },
    {
      id: 3,
      category: "commercial",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/6f9378225600833.68206a37949ad.jpg?height=600&width=800",
      title: "Luxury Hotel Suite",
    },
    {
      id: 4,
      category: "residential",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/dc5bc6225602705.68207501e212d.jpeg?height=600&width=800",
      title: "Contemporary Kitchen",
    },
    {
      id: 5,
      category: "commercial",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/b9886d206931563.66d553fc018f8.jpeg?height=600&width=800",
      title: "Retail Store Design",
    },
    {
      id: 6,
      category: "residential",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/33405a212483157.6735adeac1e64.jpg?height=600&width=800",
      title: "Restaurant Interior",
    },
    {
      id: 7,
      category: "residential",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/6c9c34206936899.66d568e26eed7.png?height=600&width=800",
      title: "Master Bedroom Suite",
    },
    {
      id: 8,
      category: "commercial",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/0cf05f208111617.66e96c55afa2b.png?height=600&width=800",
      title: "Conference Room",
    },
    {
      id: 9,
      category: "commercial",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/336a3c215885955.67766fe6777f0.png?height=600&width=800",
      title: "Spa & Wellness Center",
    },
    {
      id: 10,
      category: "residential",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/7810e3214603357.675ad3fea066a.png?height=600&width=800",
      title: "Luxury Bathroom",
    },
    {
      id: 11,
      category: "commercial",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/330d07217045273.6789faf99518a.png?height=600&width=800",
      title: "Co-working Space",
    },
    {
      id: 12,
      category: "residential",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/d8952c214514771.6759704d62800.png?height=600&width=800",
      title: "Hotel Lobby",
    },
  ]

  const filteredGallery =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2e9125225869163.6824a5dfad71c.jpg?height=1080&width=1920" alt="Gallery" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our portfolio of completed projects and get inspired for your next interior design project.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-4 animate-fade-in">
            {[
              { id: "all", label: "All Projects" },
              { id: "residential", label: "Residential" },
              { id: "commercial", label: "Commercial" },
              // { id: "hospitality", label: "Hospitality" },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-md transition-all ${
                  activeFilter === filter.id
                    ? "bg-primary text-black font-medium"
                    : "bg-dark-300 text-white hover:bg-dark-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Masonry */}
          <MasonryGallery items={filteredGallery} />
        </div>
      </section>
    </div>
  )
}

