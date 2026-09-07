import Button from "@/components/ui/Button"
import { transformationHub } from "@/data"
import Image from "next/image"

const TransformationHub = () => {
  return (
    <section id="transformation-hub" className="w-full bg-[#f9f9f9] px-6 py-10 md:px-10">
      <div className="mx-auto w-full max-w-6xl rounded-[20px] bg-[#FBDDE2] px-5 py-6 md:px-8 md:py-10">

        {/* Heading */}
        <div className="flex flex-col gap-2">
          <p className="text-[#3383C5] text-xs italic">
            Learning With Our CEO:
          </p>

          <h3 className="text-[#571244] text-start italic">
            Transformation Hub With Jite Newton
          </h3>
        </div>

        {/* Description */}
        <p className="mt-5 text-start text-[#151515]">
          Transformation Hub with Jite Newton is a flagship webinar series
          curated by the CEO, Dr. Jite Newton. Designed to elevate career
          trajectories and leadership capabilities, this exclusive event
          offers invaluable insights and strategies for personal and
          professional growth. Whether you&apos;re seeking to advance your
          career or enhance your leadership skills, the Transformation Hub
          provides a transformative learning experience to unlock your full
          potential and drive success in your endeavours.
        </p>
        
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-stretch">
          
          <div className="w-full md:w-1/2">
            <Image
              src="/tHub.svg"
              alt="Transformation Hub With Jite Newton"
              width={600}
              height={450}
              className="h-full w-full rounded-md object-cover"
            />
          </div>
          
          <div className="flex w-full flex-col justify-center gap-3 md:w-1/2">
            <ul className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
              {transformationHub.map(({ point }, id) => (
                <li
                  key={id}
                  className="flex items-center gap-3 rounded-lg bg-white px-4 py-3"
                >
                  <Image
                    src="/tbullet.svg"
                    alt=""
                    width={14}
                    height={14}
                  />

                  <span className="text-sm text-[#151515]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              name="Learn More"
              src="/arrowout.svg"
              alt="Learn More"
              width={10}
              height={10}
              link="/"
              className="mt-4 w-max rounded-sm bg-[#571244] px-6 py-2.75 text-sm text-white! font-semibold hover:bg-[#571244]/90"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default TransformationHub