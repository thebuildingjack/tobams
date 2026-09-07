"use client"

import { testimonials } from "@/data"
import Image from "next/image"
import { useEffect, useState } from "react"
import Button from "./ui/Button"

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3)
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2)
      } else {
        setItemsPerView(1)
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)

    return () => {
      window.removeEventListener("resize", updateItemsPerView)
    }
  }, [])

  const maxStart = Math.max(testimonials.length - itemsPerView, 0)

  const canGoPrevious = current > 0
  const canGoNext = current < maxStart

  const next = () => {
    if (!canGoNext) return

    setCurrent((prev) => prev + 1)
  }

  const previous = () => {
    if (!canGoPrevious) return

    setCurrent((prev) => prev - 1)
  }

  return (
    <section id="testimonial" className="w-full bg-white px-6 py-8 md:px-10 md:py-10">
      <div className="mx-auto w-full max-w-7xl">

        <h3 className="mb-5 text-center text-[#151515]">
          Testimonials
        </h3>

        {/* Cards */}
        <div className="w-full overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(calc(-${current} * (var(--card-width) + 16px)))`,
              "--card-width":
                itemsPerView === 1
                  ? "92%"
                  : itemsPerView === 2
                    ? "46%"
                    : "30%",
            } as React.CSSProperties}
          >
            {testimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.name}-${index}`}
                className={`border-l-[#EF4353] border-l shrink-0 rounded-lg bg-[#F9F9F9] p-4
                  ${
                    itemsPerView === 1
                      ? "w-[92%]"
                      : itemsPerView === 2
                        ? "w-[46%]"
                        : "w-[30%]"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="text-sm text-[#151515]">
                      {testimonial.name}
                    </h4>

                    <p className="text-[10px] text-[#696969]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-start text-sm leading-relaxed text-[#151515]">
                  {testimonial.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-5 flex justify-end gap-0">
          <Button
            name=""
            src="/leftarrow.svg"
            width={28}
            height={28}
            onClick={previous}
            className={`cursor-pointer transition-opacity ${
              !canGoPrevious
                ? "pointer-events-none opacity-30"
                : "opacity-100"
            }`}
          />

          <Button
            name=""
            src="/rightarrow.svg"
            width={28}
            height={28}
            onClick={next}
            className={`cursor-pointer transition-opacity ${
              !canGoNext
                ? "pointer-events-none opacity-30"
                : "opacity-100"
            }`}
          />
        </div>

      </div>
    </section>
  )
}

export default Testimonials