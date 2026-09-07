import Button from "@/components/ui/Button"

const CTA = () => {
  return (
    <section id="cta" className="w-full bg-[#2C0922] px-6 py-5 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

        <div>
          <p className="text-center text-white md:text-start">
            Ready to take your business to the next level?
          </p>

          <h3 className="mt-1 text-center text-white md:text-start">
            Let&apos;s work together to create a difference.
          </h3>
        </div>

        <Button
          name="Get in Touch"
          link="/"
          className="w-fit rounded-sm bg-[#8F6182] px-5 py-2 text-xs font-semibold text-white"
        />

      </div>
    </section>
  )
}

export default CTA