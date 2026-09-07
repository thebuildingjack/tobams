import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full bg-[#11040E] px-6 py-8 text-white md:px-10">

      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/tobams_logo.svg"
              alt="Tobams Group"
              width={150}
              height={100}
              className="mb-4"
            />

            <p className="max-w-xs text-start text-white text-xs leading-relaxed">
              Tobams Group is a dynamic consultancy and professional
              development organisation committed to helping individuals and
              organisations achieve their full potential.
            </p>

            {/* Socials */}
            <div className="mt-4 flex gap-2">
              <Link href="#">
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </Link>

              <Link href="#">
                <Image
                  src="/ig.svg"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </Link>

              <Link href="#">
                <Image
                  src="/x.svg"
                  alt="Twitter"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white">
              What We Do
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="#" className="text-xs text-white">
                  Training
                </Link>
              </li>

              <li>
                <Link href="#" className="text-xs text-white">
                  Consultancy
                </Link>
              </li>

              <li>
                <Link href="#" className="text-xs text-white">
                  Career Development
                </Link>
              </li>

              <li>
                <Link href="#" className="text-xs text-white">
                  Strategic Advisory
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white">
              Company
            </h4>

            <ul className="mt-3 space-y-2">
              <li>
                <Link href="#" className="text-xs text-white">
                  About
                </Link>
              </li>

              <li>
                <Link href="#" className="text-xs text-white">
                  People
                </Link>
              </li>

              <li>
                <Link href="#" className="text-xs text-white">
                  Careers
                </Link>
              </li>

              <li>
                <Link href="#" className="text-xs text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div>
            <h4 className="text-white">
              Solution
            </h4>

            <ul className="mt-3 space-y-2">
              <li>
                <Link href="#" className="text-xs text-white">
                  Training
                </Link>
              </li>

              <li>
                <Link href="#" className="text-xs text-white">
                  Consulting
                </Link>
              </li>

              <li>
                <Link href="#" className="text-xs text-white">
                  Development
                </Link>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-8 grid gap-4 border border-white/20 pt-5 md:grid-cols-3 bg-[#FFFFFF0F]">

          <div>
            <h4 className="text-white text-xs">
              Registered Office
            </h4>

            <p className="mt-2 text-start text-white text-[10px]">
              Lagos, Nigeria
            </p>
          </div>

          <div>
            <h4 className="!text-white text-xs">
              Email
            </h4>

            <p className="mt-2 text-start text-white text-[10px]">
              info@tobamsgroup.com
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs">
              Contact Information
            </h4>

            <p className="mt-2 text-start text-white text-[10px]">
              +234 000 000 0000
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-6 flex flex-col justify-between gap-3 border-t border-white/20 pt-4 md:flex-row">

          <p className="text-white text-[9px]">
            Copyright © Tobams Group 2026. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link href="#" className="text-[9px] text-white">
              Terms and Conditions
            </Link>

            <Link href="#" className="text-[9px] text-white">
              Privacy Policy
            </Link>

            <Link href="#" className="text-[9px] text-white">
              Cookie Policy
            </Link>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer