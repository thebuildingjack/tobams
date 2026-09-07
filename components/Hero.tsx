import Image from "next/image"
import Button from "./ui/Button"

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-80 md:min-h-130 lg:min-h-140 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/heroimg-mobile.jpg"
        alt="Learning and Development"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
        
        <p className="rounded-full bg-white/10 px-8 py-2.5 text-xs uppercase text-white font-semibold">
          What We Do
        </p>
        
        <h1 className="mt-3 text-xl font-bold md:text-4xl">
          Training and Development
        </h1>
        
        <p className="mt-3 text-sm leading-relaxed font-sans text-white md:w-2'3">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today&apos;s ever-evolving landscape.
        </p>
        
        <Button
          name="Book a Consultation"
          link="/"
          className="mt-5 rounded-sm bg-[#571244] px-5.5 py-2.75 text-sm text-white font-semibold hover:bg-[#571244]/90"
        />
      </div>
    </section>
  )
}

export default Hero