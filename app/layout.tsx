import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import CookieConsent from "@/components/cookie-consent"
import BackToTop from "@/components/back-to-top"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BMI Interior - Premium Interior Design Solutions",
  description: "Professional interior design services for residential and commercial spaces.",
    generator: 'Muhammad ARsalan'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
          <CookieConsent />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'