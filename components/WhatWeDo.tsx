import { whatwedo } from "@/data/index"
import Image from "next/image"

const WhatWeDo = () => {
  return (
    <section className="lg:px-24 relative w-full bg-[#f9f9f9] px-6 py-10 md:px-12 lg:py-20">
      <ul className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-8">
        {whatwedo.map((item, index) => (
          <li
            key={index}
            className={`flex w-full flex-col items-center justify-center gap-6 md:flex-row md:gap-10 md:my-3 ${
              index === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex w-full flex-col gap-4 md:w-1/2 text-[#696969]">
              <h3 className="text-start text-[#151515]">
                {item.title}
              </h3>

              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={400}
                loading="eager"
                className="h-auto w-full md:hidden"
              />

              <p className="text-start">
                {item.desc}
              </p>

              <ul className="mt-4">
                {item.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    className="flex flex-row items-center gap-2"
                  >
                    <Image
                      src="/bullet.svg"
                      alt={item.title}
                      width={13}
                      height={13}
                      className="h-auto w-auto"
                    />
                    <p>{bullet.points}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center md:w-1/2">
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={500}
                className="hidden h-full min-h-full w-full md:block"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default WhatWeDo