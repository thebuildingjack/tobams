"use client"

import { testimonials } from "@/data"
import Image from "next/image"
import { useState } from "react"
import Button from "./Button"

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  const visibleTestimonials = testimonials.slice(
    current,
    current + 3
  )

  const next = () => {
    setCurrent((prev) =>
      prev + 3 >= testimonials.length ? 0 : prev + 1
    )
  }

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? Math.max(testimonials.length - 3, 0) : prev - 1
    )
  }

  return (
    <section className="w-full bg-white px-6 py-8 md:px-10 md:py-10">
      <div className="mx-auto w-full max-w-7xl">

        <h3 className="mb-5 text-center text-[#151515]">
          Testimonials
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {visibleTestimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className="rounded-md bg-[#F9F9F9] p-4"
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
                  <h4 className="text-[#151515] text-sm">
                    {testimonial.name}
                  </h4>

                  <p className="text-[#696969] text-[10px]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-start text-[#151515] text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </article>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-5 flex justify-end gap-0">
          <Button
            name=""
            src="/leftarrow.svg"
            width={28} 
            height={28}
            onClick={previous}
            className="cursor-pointer"
          />

          <Button
            name=""
            src="/rightarrow.svg"
            width={28}
            height={28}
            onClick={next}
            className="cursor-pointer"
          />

        </div>

      </div>
    </section>
  )
}

export default Testimonials