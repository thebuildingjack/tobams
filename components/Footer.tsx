import { footerLinks } from "@/data"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-[#11040E] px-4 py-6 text-white md:px-6 md:py-8">
      <div className="mx-auto max-w-7xl">
        
        <div className="grid sm:grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
          
          <div className="sm:col-span-2 md:col-span-1">
            <Image
              src="/tobams_logo.svg"
              alt="Tobams Group"
              width={150}
              height={100}
              className="mb-3"
            />

            <p className="max-w-67.5 text-start text-white text-sm leading-relaxed">
              Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
            </p>
            
            <div className="mt-3 flex gap-2">
              <Link href="https://www.linkedin.com/company/tobams-group/" target="_blank">
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                />
              </Link>

              <Link href="https://www.instagram.com/tobamsgroup/?igsh=cmkxY2hremU5a2Zw" target="_blank">
                <Image
                  src="/ig.svg"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </Link>

              <Link href="https://x.com/tobams_group?s=11" target="_blank">
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
            <h4 className="text-white text-lg font-semibold">
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
            <h4 className="text-white text-lg font-semibold">
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
            <h4 className="text-white text-lg font-semibold">
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
            <h4 className="text-white font-semibold">
              Registered Offices
            </h4>

            <div className="mt-1">
              <h4 className="text-[#FF4B68] text-xs font-semibold">
                United Kingdom
              </h4>

              <p className="text-white text-xs leading-relaxed">
                07451196 (Registered by Company House)
                <br />
                Vine Cottages, 215 North Street, Romford, Essex, United
                Kingdom, RM1 4QA
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-[#FF4B68] text-xs font-semibold">
              Nigeria
            </h4>

            <p className="mt-1 text-white text-xs leading-relaxed">
              RC 1048722 (Registered by the Corporate Affairs Commission)
              <br />
              4, Muaz Close, Angwar-Rimi
            </p>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-white text-xs font-semibold">
              Contact Information
            </h4>

            <div className="mt-1 flex flex-col gap-1">
              <p className="text-white text-xs">
                <span className="text-[#FF4B68]">✉</span>{" "}
                theteam@tobamsgroup.com
              </p>

              <p className="text-white text-xs">
                <span className="text-[#FF4B68]">☎</span>{" "}
                +447886600748
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex flex-col justify-between gap-2 border-t border-white/10 pt-3 md:flex-row md:items-center">

          <p className="text-white text-xs">
            Copyright © Tobams Group 2024. All rights reserved.
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
              Cookies Policy
            </Link>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer