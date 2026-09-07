import { managementDevProgram } from "@/data"
import Image from "next/image"

const ManagementDevProgram = () => {
  return (
    <section className="w-full bg-[#f9f9f9] px-6 py-10 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-[20px] bg-[#2C0922] p-4 md:flex-row md:items-center md:p-5">
        
        <div className="w-full md:w-1/2 space-y-4 md:space-y-0">
        <h3 className="text-center md:text-left text-white md:hidden">
            Management Development Program
          </h3>

          <Image
            src="/mdp.svg"
            alt="Management Development Program"
            width={500}
            height={500}
            className="h-auto w-full object-cover"
          />
        </div>
        
        <div className="flex w-full flex-col gap-4 px-2 py-5 text-white md:w-1/2 md:px-8 md:py-4 lg:px-10">

          <h3 className="text-center md:text-left hidden md:flex">
            Management Development Program
          </h3>

          <p className="text-left">
            Tobams Group offers a comprehensive Management Development
            Program designed to equip corporate organisations with the
            high-performing leaders they need to thrive.
          </p>

          <p className="text-left">
            Our program includes workshops, seminars, coaching sessions,
            online courses, and experiential learning opportunities designed
            to improve leadership, strategic thinking, communication, and
            other essential managerial competencies for corporate
            organisations.
          </p>

          <ul className="flex flex-col gap-4">
            {managementDevProgram.map(({ point }, id) => (
              <li
                key={id}
                className="flex w-full items-center gap-3 rounded-md bg-[#8F6182] px-4 py-2"
              >
                <Image
                  src="/wbullet.svg"
                  alt=""
                  width={14}
                  height={14}
                />

                <span className="text-sm text-white">
                  {point}
                </span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  )
}

export default ManagementDevProgram