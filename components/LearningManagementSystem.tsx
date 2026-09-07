import { courses } from '@/data'
import Image from 'next/image'
import Button from './ui/Button'


const LearningManagementSystem = () => {
  return (
    <section id="learning-management-system" className="lg:px-24 flex flex-col mx-auto md:flex-row relative w-full bg-[#5712441A] p-6  lg:py-12 gap-5 lg:gap-8">
      <h3 className="text-start text-[#571244] mt-2 md:hidden">
          Learning Management System
      </h3>
      <Image
        src="/lms.svg"
        alt="Learning Management System"
        width={500} height={300}
        loading="eager"
      />

      <div className="flex flex-col gap-4 lg:gap-8 lg:w-2/3">
        <h3 className="hidden md:flex text-start text-[#571244]">
          Learning Management System
        </h3>
        <div className="w-full flex flex-col gap-4 lg:gap-6 bg-[#5712441A] p-6 lg:p-8 rounded-lg">
          <p className="text-start text-[#151515]">
            TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today&apos;s competitive tech landscape.
          </p>

          <div className="flex flex-col gap-3">
            <h4 className="text-start text-[#571244]">
              Some of our courses include:
            </h4>
            <ul className="md:flex flex-wrap gap-3 md:gap-1 list-disc list-inside text-start text-[#151515] text-sm font-sans space-y-3 md:space-y-0">
              {courses.map(({course}, id) => (
                <li key={id}>{course}</li>
              ))}
            </ul>
            <Button
              name="Learn More"
              src="/arrowout.svg"
              alt="Learn More"
              width={10}
              height={10}
              link="/"
              className="md:hidden w-max rounded-sm bg-[#571244] px-6 py-2.75 text-sm text-white! font-semibold hover:bg-[#571244]/90"
            />
          </div>
        </div>
        <Button
          name="Learn More"
          src="/arrowout.svg"
          alt="Learn More"
          width={10}
          height={10}
          link="/"
          className="md:flex hidden w-max rounded-sm bg-[#571244] px-6 py-2.75 text-sm text-white! font-semibold hover:bg-[#571244]/90"
        />
      </div>
    </section>
  )
}

export default LearningManagementSystem