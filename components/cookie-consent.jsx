"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-300 border-t border-gray-800 p-4 z-50 animate-slide-up">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 md:mr-8">
          <h3 className="text-lg font-semibold mb-1">We use cookies</h3>
          <p className="text-sm text-gray-300">
            This website uses cookies to ensure you get the best experience on our website.
          </p>
        </div>
        <div className="flex space-x-3">
          <Button
            variant="outline"
            className="border-gray-600 hover:bg-gray-800 hover:text-white"
            onClick={declineCookies}
          >
            Decline
          </Button>
          <Button className="bg-primary text-black hover:bg-primary/80 hover-glow" onClick={acceptCookies}>
            Accept All
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent

