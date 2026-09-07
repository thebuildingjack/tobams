import { footerLinks } from "@/data"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full bg-[#11040E] px-4 py-6 text-white md:px-6 md:py-8">
      <div className="mx-auto max-w-7xl">
        
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
          
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/tobams_logo.svg"
              alt="Tobams Group"
              width={150}
              height={100}
              className="mb-3"
            />

            <p className="max-w-67.5 text-start text-white text-sm leading-relaxed">
              Tobams Group is an innovative consulting firm providing the
              full suite of tech talent development in Africa, specializing
              in talent acquisition, mentorship, and skill development to
              drive organizational success.
            </p>
            
            <div className="mt-3 flex gap-2">
              <Link href="#">
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                />
              </Link>

              <Link href="#">
                <Image
                  src="/ig.svg"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </Link>

              <Link href="#">
                <Image
                  src="/x.svg"
                  alt="X"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold">
              What We Do
            </h4>

            <ul className="mt-2 space-y-1">
              {footerLinks.whatWeDo.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="text-xs text-white transition-opacity hover:opacity-70"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold">
              Company
            </h4>

            <ul className="mt-2 space-y-1">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="text-xs text-white transition-opacity hover:opacity-70"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold">
              Solution
            </h4>

            <ul className="mt-2 space-y-1">
              {footerLinks.solution.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="text-xs text-white transition-opacity hover:opacity-70"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 gap-4 rounded-sm bg-[#FFFFFF0F] px-4 py-3 md:grid-cols-3">
        
          <div>
            <h4 className="text-white text-xs font-semibold">
              Registered Office
            </h4>

            <p className="mt-1 text-start text-white text-xs leading-relaxed">
              Lagos, Nigeria
              <br />
              10A, VGC Road, Lekki, Lagos
            </p>
          </div>
          
          <div>
            <h4 className="text-[#FF4B68] text-xs font-semibold">
              Nigeria
            </h4>

            <p className="mt-1 text-start text-white text-xs leading-relaxed">
              RC: 2004007 Registered by the Corporate Affairs Commission
              <br />
              4, Musa Ghali, Abuja-FCT
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-xs font-semibold">
              Contact Information
            </h4>

            <div className="mt-1 flex flex-col gap-1">
              <p className="text-white text-xs">
                ✉ info@tobamsgroup.com
              </p>

              <p className="text-white text-xs">
                ☎ +234 708 637 0545
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex flex-col justify-between gap-2 border-t border-white/10 pt-3 md:flex-row md:items-center">

          <p className="text-white text-xs">
            Copyright © Tobams Group 2026. All rights reserved.
          </p>

          <div className="flex gap-3">
            <Link
              href="/terms"
              className="text-xs text-white"
            >
              Terms and Conditions
            </Link>

            <Link
              href="/privacy"
              className="text-xs text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/cookies"
              className="text-xs text-white"
            >
              Cookie Policy
            </Link>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer