"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Emma Schneider",
    position: "Interior Enthusiast",
    image: "/t1.jpg?height=100&width=100",
    quote:
      "BMI Interior turned my vision into reality. The design, detailing, and execution were flawless. I couldn't be happier with the final outcome!",
    rating: 5,
  },
  {
    name: "Lukas Müller",
    position: "Managing Director, Müller Ventures",
    image: "/t2.jpg?height=100&width=100",
    quote:
      "Exceptional service from start to finish. Their team is professional, creative, and truly understands the client’s needs.",
    rating: 5,
  },
  {
    name: "Nikolai Petrov",
    position: "Real Estate Developer",
    image: "/t3.jpg?height=100&width=100",
    quote:
      "Working with BMI Interior was seamless. Their innovative designs and timely delivery made the entire process enjoyable.",
    rating: 5,
  },
]


const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="bg-gradient-to-br from-dark-300 to-dark-400 border-gray-800 hover-glow overflow-hidden">
                <CardContent className="p-6 md:p-8 relative">
                  <Quote className="absolute top-6 right-6 h-16 w-16 text-primary/10" />

                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-primary">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? "text-primary fill-primary" : "text-gray-500"
                            }`}
                          />
                        ))}
                      </div>

                      <blockquote className="text-gray-300 italic mb-6 text-lg">"{testimonial.quote}"</blockquote>

                      <div className="border-t border-gray-700 pt-4">
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-primary">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-primary text-white p-3 rounded-full z-10 transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-primary text-white p-3 rounded-full z-10 transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return
              setIsAnimating(true)
              setCurrentSlide(index)
              setTimeout(() => setIsAnimating(false), 500)
            }}
            className={`w-10 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-primary" : "bg-gray-600 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialSlider

