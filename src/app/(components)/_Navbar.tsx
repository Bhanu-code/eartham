"use client";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import Logo from "../assets/navbar_icons/logo.svg";
import Search from "../assets/navbar_icons/search_icon.svg";

const _Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <>
      <div className="w-full flex items-center justify-between px-10 py-1">
        <div className="left logo-cont">
          <Image src={Logo} width={54} height={54} alt="Logo" />
        </div>
         
        <div className="right action-btns flex items-center justify-between space-x-5 ">
          <div className="mid nav-links pr-32 flex space-x-14 montserrat-600 text-[15px] font-semibold">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`
                  relative transition-all duration-300 ease-in-out
                  ${pathname === link.href 
                    ? 'text-[color:var(--green-color)] opacity-100' 
                    : 'text-gray-700 opacity-70 hover:opacity-100'
                  }
                  hover:text-[color:var(--green-color)]
                  after:content-[''] after:absolute after:w-0 after:h-[2px] 
                  after:bg-[color:var(--green-color)] after:left-0 after:-bottom-1
                  after:transition-all after:duration-300 after:ease-in-out
                  ${pathname === link.href 
                    ? 'after:w-full' 
                    : 'hover:after:w-full'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="search-cont bg-[color:var(--green-color)] rounded-full p-2 hover:scale-110 transition-transform duration-200 cursor-pointer">
            <Image src={Search} height={15} width={15} alt="search" />
          </div>
          <div className="btns space-x-5 montserrat-600 text-[16px] font-semibold">
            <button className="bg-[color:var(--green-color)] text-white px-8 py-2 rounded-3xl hover:bg-opacity-90 transition-all duration-200 hover:scale-105">
              Log In
            </button>
            <button className="bg-[color:var(--green-color)] text-white px-8 py-2 rounded-3xl hover:bg-opacity-90 transition-all duration-200 hover:scale-105">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default _Navbar