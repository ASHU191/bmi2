"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const slides = [
  {
    image: "/slider1.jpg?height=1080&width=1920",
    alt: "Modern Living Room Interior",
    title: "Elevate Your Living Space",
    subtitle: "Transform your home with our premium interior design solutions",
  },
  {
    image: "/slider2.jpg?height=1080&width=1920",
    alt: "Luxury Kitchen Design",
    title: "Luxury, Redefined",
    subtitle: "Where functionality meets elegance in every detail",
  },  
  {
    image: "/slider3.jpg?height=1080&width=1920",
    alt: "Contemporary Office Space",
    title: "Inspiring Workspaces",
    subtitle: "Creating productive environments for businesses to thrive",
  },
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative h-[85vh] md:h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
            <div className="absolute inset-0 flex items-center justify-center lg:justify-start px-4 sm:px-6 lg:pl-16 xl:pl-24">
                <div className="w-full max-w-md sm:max-w-2xl animate-fade-in">
                  <div className="bg-black/40 p-4 sm:p-6 rounded-lg backdrop-blur-sm gold-border">
                    <h2 className="text-primary text-base sm:text-xl mb-1 sm:mb-2 font-medium">
                      Interior Design and Fit out Company in Dubai
                    </h2>
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-sm sm:text-lg mb-4 sm:mb-6 text-gray-300">
                      {slide.subtitle}
                    </p>

                    <div className="flex gap-2 sm:gap-4 flex-row">
                      <Button
                        className="bg-primary text-black hover:bg-primary/80 hover-glow w-[130px] sm:w-[150px] py-2 text-xs sm:text-sm font-medium"
                        asChild
                      >
                        <Link href="/contact">Get a Free Quote</Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-primary text-white hover:bg-primary/10 w-[130px] sm:w-[150px] py-2 text-xs sm:text-sm font-medium"
                        asChild
                      >
                        <Link href="/projects">View Projects</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-[55%] sm:top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-primary text-white p-2 sm:p-3 rounded-full z-10 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-[55%] sm:top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-primary text-white p-2 sm:p-3 rounded-full z-10 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return
              setIsAnimating(true)
              setCurrentSlide(index)
              setTimeout(() => setIsAnimating(false), 500)
            }}
            className={`w-10 h-2 rounded-full transition-colors ${
              index === currentSlide
                ? "bg-primary"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlider
