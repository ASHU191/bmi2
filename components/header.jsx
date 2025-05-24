"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import { FaXTwitter, FaLinkedin } from "react-icons/fa6"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Logo from "../public/BMI-LOGO-TRANSPARENT.jpg"
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="w-full">
      <div className="bg-dark-300 py-2 border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          {/* <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm">
              <Mail className="h-4 w-4 mr-2 text-primary" />
              <a href="mailto:info@bmiinterior.com" className="hover:text-primary transition-colors">
                info@bmiinterior.com
              </a>
            </div>
            <div className="flex items-center text-sm">
              <Phone className="h-4 w-4 mr-2 text-primary" />
              <a href="tel:+971553681813" className="hover:text-primary transition-colors">
                +971 553-681-813
              </a>
            </div>
            <div className="hidden md:flex items-center text-sm">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              <span>Al-Qouz Industrial Area 3 - Dubai</span>
            </div>
          </div> */}

<div className="flex flex-col gap-1 md:flex-row md:items-center md:space-x-4">
  <div className="flex items-center text-sm">
    <Mail className="h-4 w-4 mr-2 text-primary" />
    <a href="mailto:info@bmiinterior.com" className="hover:text-primary transition-colors">
      info@bmiinterior.com
    </a>
  </div>
  <div className="flex items-center text-sm">
    <Phone className="h-4 w-4 mr-2 text-primary" />
    <a href="tel:+971553681813" className="hover:text-primary transition-colors">
      +971 553-681-813
    </a>
  </div>
</div>
          <div className="flex items-center space-x-3">
            <a
              href="https://www.facebook.com/broadmindinterior"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/bmiinterior"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/bmiinteriorLLC"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <FaXTwitter className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/broadmindinterior"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <nav
        className={cn(
          "py-4 transition-all duration-300 border-b border-gray-800",
          isScrolled ? "bg-black/90 backdrop-blur-md sticky top-0 z-50 shadow-md" : "bg-dark-400",
        )}
      >
        <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center pr-4">

            <div className="relative h-12 w-40">
            <div className="relative w-[100px] h-[40px] md:w-[160px] md:h-[60px] ">
  <Image
    src="/bmi-light.png"
    alt="BMI Interior Logo"
    fill
    className="object-contain"
    sizes="(max-width: 768px) 100vw, 40vw"
  />
</div>


            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium hover:text-primary relative group transition-colors duration-300"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Button className="ml-4 bg-primary text-black hover:bg-primary/80 hover-glow" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-gray-800"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[104px] left-0 right-0 bg-black/95 backdrop-blur-md z-50 border-b border-gray-800 animate-fade-in">
            <div className="container mx-auto py-4 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 hover:bg-gray-800 rounded-md hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="mt-4 bg-primary text-black hover:bg-primary/80 hover-glow" asChild>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
