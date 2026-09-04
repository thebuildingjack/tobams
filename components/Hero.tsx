import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full relative flex flex-col justify-center items-center'>
      <Image src="/heroimg-mobile.jpg" alt="TOBAMS Logo" width={500} height={500} className="relative w-full h-full object-cover" />
      <div className="w-full h-full backdrop-blur-[2px] absolute inset-0 flex flex-col items-center justify-center px-6 py-10 text-white">
        <p className="text-center text-white py-4 px-8 uppercase">
          what we do
        </p>
        <h1 className=''>Learning and Development</h1>
        <p className='font-semibold font-sans text-md'>Welcome to Tobams Group, where we redefine tech talent acquisition. In a rapidly evolving digital landscape, securing top-tier tech professionals is crucial. Dive into our specialized service—Tech Talent Solution—and witness how we revolutionize your team with the best in the industry.</p>
      </div>
    </div>
  )
}

export default Hero