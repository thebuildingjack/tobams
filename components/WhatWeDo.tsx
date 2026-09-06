import { whatwedo } from "@/data/index"
import Image from "next/image"

const WhatWeDo = () => {
  return (
    <section className="w-full relative bg-[#f9f9f9] py-16 sm:py-24 px-6">
      <ul className="flex flex-col gap-8 max-w-7xl mx-auto">
        {whatwedo.map((item, index) => (
          <li key={index} className={`flex w-full flex-row gap-6 md:gap-12 items-center justify-center" ${index === 1 ? "md:flex-row-reverse" : ""}`}>
            <div className="flex flex-col gap-4 md:w-1/2">
              <h3>{item.title}</h3>
              <Image src={item.img} alt={item.title} width={400} height={400} className="md:hidden w-full h-auto" />

              <p>{item.desc}</p>
              <ul className=" mt-4">
                {item.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex flex-row gap-2 items-center">
                    <Image src="/bullet.svg" alt={item.title} width={14} height={14} />
                    <p>{bullet.points}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <Image src={item.img} alt={item.title} width={500} height={500} className="hidden md:block w-full h-full min-h-full " />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default WhatWeDo