import { testimonials } from "@/data"
import Image from "next/image"

const Testimonials = () => {
  return (
    <section className="w-full bg-white px-6 py-8 md:px-10 md:py-10">
      
      <div className="mx-auto w-full max-w-7xl">

        <h3 className="mb-5 text-center text-[#151515]">
          Testimonials
        </h3>

        {/* Cards */}
        <div className="flex gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-4">
          {testimonials.map(({image, name, role, text}, index) => (
            <article
              key={index}
              className="min-w-67.5 rounded-md bg-[#F9F9F9] p-4 md:min-w-0 border-l-[#EF4353] border-l-2"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={image}
                  alt={name}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-[#151515] text-xs">
                    {name}
                  </h4>

                  <p className="text-[#696969] text-[10px]">
                    {role}
                  </p>
                </div>
              </div>
              
              <p className="mt-3 text-start text-[#151515] text-xs leading-relaxed">
                {text}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials