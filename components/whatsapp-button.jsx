"use client"
import { useState } from "react"
import { X } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = "971553681813" // The WhatsApp number to message

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 left-0 bg-dark-300 p-4 rounded-lg shadow-lg border border-gray-800 w-72 animate-fade-in">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-white">Chat with us on WhatsApp</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm text-gray-300 mb-4">
            Hi there! How can we help you today? Click below to chat with us directly.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-600 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-green-700 transition-colors w-full"
          >
            <FaWhatsapp className="h-4 w-4 mr-2" />
            Start WhatsApp Chat
          </button>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-110"
      >
        <FaWhatsapp className="h-6 w-6" />
      </button>
    </div>
  )
}

export default WhatsAppButton

