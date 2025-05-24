"use client"
import { useState, useEffect, useRef } from "react"

const CountUp = ({ end, duration = 2000, className = "" }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          const startTime = Date.now()
          const timer = setInterval(() => {
            const timePassed = Date.now() - startTime
            const progress = Math.min(timePassed / duration, 1)
            setCount(Math.floor(progress * end))

            if (progress === 1) {
              clearInterval(timer)
            }
          }, 16)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observerRef.current.observe(countRef.current)
    }

    return () => {
      if (observerRef.current && countRef.current) {
        observerRef.current.unobserve(countRef.current)
      }
    }
  }, [end, duration])

  return (
    <span ref={countRef} className={className}>
      {count}+
    </span>
  )
}

export default CountUp

