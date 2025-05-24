"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const MasonryGallery = ({ items }) => {
  const [columns, setColumns] = useState(3)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const lightboxRef = useRef(null)

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
    setIsLoaded(true)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Distribute gallery items into columns with different heights
  const getColumnItems = () => {
    const result = Array.from({ length: columns }, () => [])

    items.forEach((item, index) => {
      // Add a random height factor to create more visual interest
      const heightFactor = [0.8, 1, 1.2][Math.floor(Math.random() * 3)]
      result[index % columns].push({
        ...item,
        heightFactor,
      })
    })

    return result
  }

  const columnItems = getColumnItems()

  // Handle click outside lightbox to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (lightboxRef.current && !lightboxRef.current.contains(event.target)) {
        setSelectedImage(null)
      }
    }

    if (selectedImage) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [selectedImage])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [selectedImage])

  if (!isLoaded) {
    return <div className="min-h-[400px] flex items-center justify-center">Loading gallery...</div>
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {columnItems.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-4">
            {column.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                }}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div
                  className="relative"
                  style={{
                    paddingBottom: `${item.heightFactor * 100}%`,
                  }}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-primary capitalize">{item.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* 3D Style Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 90, 0] }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-10 bg-black/50 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </motion.button>

            <motion.div
              ref={lightboxRef}
              initial={{ scale: 0.5, y: 100, opacity: 0 }}
              animate={{
                scale: 1,
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 200,
                },
              }}
              exit={{
                scale: 0.5,
                y: 100,
                opacity: 0,
                transition: { duration: 0.3 },
              }}
              className="max-w-4xl max-h-[80vh] relative rounded-xl overflow-hidden shadow-[0_0_40px_rgba(255,215,0,0.2)]"
            >
              <Image
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                width={1200}
                height={900}
                className="object-contain max-h-[80vh]"
              />
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4"
              >
                <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                <p className="text-primary capitalize">{selectedImage.category}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MasonryGallery

