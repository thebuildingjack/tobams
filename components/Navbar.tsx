/* import Image from "next/image"

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

export default Navbar */


"use client"

import { navLinks } from "@/data"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-200 w-full bg-[#f9f9f9]">

      {/* ================= DESKTOP / MOBILE HEADER ================= */}
      <div className="mx-auto flex w-full items-center justify-between px-6 py-4.5 md:px-10">

        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/tobams_logo.svg"
            alt="Tobams Group"
            width={100}
            height={100}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* ================= DESKTOP ACTIONS ================= */}
        <div className="hidden items-center gap-3 md:flex">

          <Link
            href="/account"
            className="flex items-center gap-2 rounded-sm bg-[#571244] px-4 py-2 text-xs text-white"
          >
            {/* <Image
              src="/pfp.svg"
              alt=""
              width={16}
              height={16}
            />

            <span>Account</span> */}
            <span className="flex items-center justify-center rounded-full bg-[#DDD0DA] ">
              <Image
                src="/pfp.svg"
                alt=""
                width={12}
                height={12}
                className="h-4.5 w-4.5 rounded-full"
              />
            </span>
            Account

            <span className="text-[10px]">⌄</span>
          </Link>

          <Link
            href="/assessment"
            className="rounded-sm bg-[#FF4655] px-5 py-2.25 text-xs font-medium text-white"
          >
            Take Assessment
          </Link>

        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex items-center justify-center md:hidden"
        >
          <Image
            src={isOpen ? "/close.svg" : "/menu.svg"}
            alt=""
            width={24}
            height={24}
          />
        </button>

      </div>

      <hr className="w-full border-t border-gray-300" />


      {/* ================= DESKTOP NAVIGATION ================= */}
      <div className="hidden w-full items-center justify-center md:flex">
        <ul className="flex items-center gap-7 py-3">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                className="flex items-center gap-1 text-xs text-[#151515] transition-colors hover:text-[#571244] hover:border-b hover:border-[#571244]"
              >
                {item.name}

                {item.dropdown && (
                  <Image
                    src="/downarrow.svg"
                    alt=""
                    width={10}
                    height={10}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>


      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-[#f9f9f9] px-6 py-5 md:hidden">

          <ul className="flex flex-col">

            {navLinks.map((item) => (
              <li
                key={item.name}
                className="border-b border-gray-200 last:border-none"
              >
                <Link
                  href={item.link}
                  onClick={closeMenu}
                  className="flex items-center justify-between py-4 text-sm text-[#151515]"
                >
                  <span>{item.name}</span>

                  {item.dropdown && (
                    <span className="text-xs">
                      ⌄
                    </span>
                  )}
                </Link>
              </li>
            ))}

          </ul>


          {/* Mobile Actions */}
          <div className="mt-5 flex flex-col gap-3">

          <Link
            href="/account"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 rounded-sm bg-[#571244] px-4 py-3 text-sm text-white"
          >
            <span className="flex items-center justify-center rounded-full bg-[#DDD0DA] p-1">
              <Image
                src="/pfp.svg"
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px] rounded-full"
              />
            </span>

            Account
          </Link>

            <Link
              href="/assessment"
              onClick={closeMenu}
              className="flex items-center justify-center rounded-sm bg-[#FF4655] px-4 py-3 text-sm text-white"
            >
              Take Assessment
            </Link>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar