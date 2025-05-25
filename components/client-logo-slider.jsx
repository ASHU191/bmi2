"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const ClientLogoSlider = () => {
  const sliderRef = useRef(null)
  const animationRef = useRef(null)

  const logos = [
    { name: "Al Burooj Real Estate", logo: "/Our Clients/Our Clients/Al Burooj Real Estate.jpg" },
    { name: "Arthur Mckenzie", logo: "/Our Clients/Our Clients/Arthur Mckenzie.jpg" },
    { name: "AVA", logo: "/Our Clients/Our Clients/AVA.png" },
    { name: "Baza Car Wash & Detailing", logo: "/Our Clients/Our Clients/Baza Car Wash & Detailing.jpg" },
    { name: "Beauty Blender Salon", logo: "/Our Clients/Our Clients/Beauty Blender Salon.jpg" },
    { name: "Brooks Real Estate", logo: "/Our Clients/Our Clients/Brooks Real Estate.png" },
    { name: "Chopper Shoot", logo: "/Our Clients/Our Clients/Chopper shoot.png" },
    { name: "Cozmuler", logo: "/Our Clients/Our Clients/Cozmuler.png" },
    { name: "Dutco", logo: "/Our Clients/Our Clients/Dutco Logo.jpg" },
    { name: "Flyby", logo: "/Our Clients/Our Clients/Flyby.jpeg" },
    { name: "Fresh on Table", logo: "/Our Clients/Our Clients/Fresh on Table.jpg" },
    { name: "Gulf Land", logo: "/Our Clients/Our Clients/Gulf Land.jpg" },
    { name: "Jet Aviation", logo: "/Our Clients/Our Clients/jet aviation.jpg" },
    { name: "John Diesel", logo: "/Our Clients/Our Clients/John Diesel.jpg" },
    { name: "Kings Car Rental", logo: "/Our Clients/Our Clients/Kings Car rental.png" },
    { name: "Moratti Detailing Club", logo: "/Our Clients/Our Clients/Moratti Detailing Club.jpg" },
    { name: "Onyx World", logo: "/Our Clients/Our Clients/oryx world.jpg" },
    { name: "Pacific Ventures", logo: "/Our Clients/Our Clients/Pacific ventures.jpg" },
    { name: "Q Stay", logo: "/Our Clients/Our Clients/Q Stay.png" },
    { name: "Q Stay New", logo: "/Our Clients/Our Clients/Q stay New.jpg" },
    { name: "Reems Exchange", logo: "/Our Clients/Our Clients/Reems Exchange.jpg" },
    { name: "Sahi Media", logo: "/Our Clients/Our Clients/Sahi Media.jpg" },
    { name: "Terra", logo: "/Our Clients/Our Clients/Terra.jpg" },
    { name: "Vachi Storage", logo: "/Our Clients/Our Clients/Vachi Storage.jpg" },
    { name: "Yofleet", logo: "/Our Clients/Our Clients/Yofleet.jpg" },
  ];

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    // Clone logos for infinite effect
    const firstSet = slider.querySelectorAll(".logo-item")
    firstSet.forEach((item) => {
      const clone = item.cloneNode(true)
      slider.appendChild(clone)
    })

    let position = 0
    const speed = 0.5

    const animate = () => {
      position += speed
      if (position >= slider.children[0].offsetWidth * logos.length) {
        position = 0
      }
      slider.style.transform = `translateX(-${position}px)`
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    slider.addEventListener("mouseenter", () => {
      cancelAnimationFrame(animationRef.current)
    })
    slider.addEventListener("mouseleave", () => {
      animationRef.current = requestAnimationFrame(animate)
    })

    const handleResize = () => {
      position = 0
      slider.style.transform = `translateX(0px)`
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", handleResize)
    }
  }, [logos.length])

  return (
    <div className="relative overflow-hidden">
      <div className="relative overflow-hidden w-full">
        <div
          ref={sliderRef}
          className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 py-8 whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="logo-item flex-shrink-0 bg-dark-400 p-3 sm:p-4 md:p-6 rounded-lg hover:bg-dark-200 transition-colors duration-300 flex items-center justify-center min-w-[120px] sm:min-w-[150px] md:min-w-[180px] lg:min-w-[200px] h-16 sm:h-18 md:h-20 lg:h-24"
            >
              <Image
                src={logo.logo}
                alt={logo.name}
                width={160}
                height={60}
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-dark-300 to-transparent z-10" />
      <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-dark-300 to-transparent z-10" />
    </div>
  )
}

export default ClientLogoSlider
