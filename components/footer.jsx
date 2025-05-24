import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Instagram, ArrowRight, FileText } from "lucide-react"
import { FaXTwitter, FaLinkedin } from "react-icons/fa6"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="bg-dark-300 text-white border-t border-gray-800">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="animate-fade-in">
            <div className="mb-4">
              <Image src="/bmi-light.png" alt="BMI Interior" width={90} height={20} />
            </div>
            <p className="text-gray-300 mb-4">
              Transforming spaces into extraordinary experiences with premium interior design solutions.
            </p>
            <Button className="mb-4 flex items-center bg-primary text-black hover:bg-primary/80 hover-glow" asChild>
              <Link href="/company-profile">
                <FileText className="h-4 w-4 mr-2" /> View Company Profile
              </Link>
            </Button>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/broadmindinterior" target="_blank" rel="noopener noreferrer"
                className="bg-dark-400 p-2 rounded-full hover:bg-primary hover:text-black transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/bmiinterior" target="_blank" rel="noopener noreferrer"
                className="bg-dark-400 p-2 rounded-full hover:bg-primary hover:text-black transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://x.com/bmiinteriorLLC" target="_blank" rel="noopener noreferrer"
                className="bg-dark-400 p-2 rounded-full hover:bg-primary hover:text-black transition-colors">
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/broadmindinterior" target="_blank" rel="noopener noreferrer"
                className="bg-dark-400 p-2 rounded-full hover:bg-primary hover:text-black transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-bold mb-4 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <ul className="space-y-2">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Projects", href: "/projects" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors flex items-center">
                      <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {[
                  { name: "Gallery", href: "/gallery" },
                  { name: "Blogs", href: "/blogs" },
                  { name: "Contact", href: "/contact" },
                  { name: "Careers", href: "/careers" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors flex items-center">
                      <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold mb-4 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-1" />
                <span className="text-gray-300">
                  6B street, Opposite Carnab,
                  <br />
                  Vachi Storage, Al-Qouz Industrial Area 3 - Dubai
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a href="tel:+971553681813" className="text-gray-300 hover:text-primary transition-colors">
                  +971 553-681-813
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:info@bmiinterior.com" className="text-gray-300 hover:text-primary transition-colors">
                  info@bmiinterior.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-bold mb-4 relative">
              Newsletter
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-dark-400 border border-gray-700 focus:border-primary px-4 py-2 rounded text-white"
              />
              <Button className="bg-primary text-black hover:bg-primary/80 hover-glow">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} BMI Interior. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 text-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 text-sm hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
