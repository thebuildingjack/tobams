import { consultantFeatures } from "@/data"
import Button from "@/components/Button"

const TrainingConsultant = () => {
  return (
    <section className="w-full bg-[#EDE7EC]">
      
      <div className="mx-auto w-full max-w-305 px-6 py-7 md:px-10 md:py-8">

        <h3 className="text-[#571244] text-start">
          Training The Consultant
        </h3>

        <p className="mt-1 text-start text-[#571244] text-xs">
          Maximise Your Potential as a Certified Trainer:
        </p>

        <p className="mt-3 text-start text-[#151515]">
          With the help of our Training Consultants program, take a
          revolutionary step toward becoming a distinguished certified
          training consultant. Learn from professionals in the field,
          immerse yourself in a thorough curriculum, and hone your training
          methods through interactive workshops. Participating in our program
          will enable you to gain expertise in diverse courses while also
          developing the abilities to mentor and encourage others in their
          career advancement.
        </p>

        {/* Features */}
        <div className="mt-4 rounded-md bg-[#571244] px-5 py-4 md:px-8 md:py-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-10 md:gap-y-5">
            {consultantFeatures.map(({title, desc}, id) => (
              <div key={id}>
                <h4 className="text-white">
                  {title}
                </h4>

                <p className="mt-1 text-start text-white">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Button
          name="Learn More"
          link="/"
          src="/arrowout.svg"
          alt="Learn More"
          width={10}
          height={10}
          className="inline-flex mt-4 w-max rounded-sm bg-[#571244] px-6 py-2.75 text-sm text-white! font-semibold hover:bg-[#571244]/90"
        />
      </div>

      <div className="w-full bg-white px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center rounded-md bg-[#571244] px-6 py-6 text-center">

          <p className="text-white">
            Want to accelerate professional growth and development at your
            organisation?
          </p>

          <p className="text-white">
            See how we can help.
          </p>

          <Button
            name="Book a Consultation"
            link="/"
            className="mt-4 rounded-sm bg-white text-sm px-6 py-2.75 font-semibold text-[#571244]"
          />

        </div>
      </div>

    </section>
  )
}

export default TrainingConsultant