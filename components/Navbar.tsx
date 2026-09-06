import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="bg-[#f9f9f9] sticky top-0 z-200 w-full flex flex-col">
      <div className="w-full flex justify-between items-center px-6 py-4.5">
        <Image 
          src="/tobams_logo.svg"
          alt="TOBAMS Logo"
          width={100} height={100}
          loading="eager"
          className="w-auto h-auto"
        />
        <Image src="/menu.svg" alt="TOBAMS Logo" width={32} height={32} />
      </div>
      <hr className="w-full border-t border-gray-300" />

    </nav>
  )
}

export default Navbar