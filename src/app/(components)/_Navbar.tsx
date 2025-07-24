"use client";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import Logo from "../assets/navbar_icons/logo.svg";
import Search from "../assets/navbar_icons/search_icon.svg";

const _Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full relative bg-white ">
      {/* Main Navbar */}
      <div className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4">
        {/* Logo */}
        <div className="logo-cont flex-shrink-0">
          <Link href="/">
            <Image 
              src={Logo} 
              width={40} 
              height={40} 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-[54px] md:h-[54px]"
              alt="Logo" 
            />
          </Link>
        </div>

        {/* Desktop Navigation Links - Hidden on mobile/tablet */}
        <div className="hidden lg:flex nav-links space-x-10 xl:space-x-8 montserrat-600 text-sm xl:text-[15px] font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                relative transition-all duration-300 ease-in-out whitespace-nowrap
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

        {/* Right Section */}
        <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
          {/* Search Icon */}
          <div className="search-cont bg-[color:var(--green-color)] rounded-full p-1.5 sm:p-2 hover:scale-110 transition-transform duration-200 cursor-pointer">
            <Image 
              src={Search} 
              height={12} 
              width={12} 
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-[15px] md:h-[15px]"
              alt="search" 
            />
          </div>
          
          {/* Auth Buttons - Responsive sizing */}
          <div className="hidden sm:flex btns space-x-2 lg:space-x-3 montserrat-600 text-xs sm:text-sm lg:text-[16px] font-semibold">
            <button className="bg-[color:var(--green-color)] text-white px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-2xl lg:rounded-3xl hover:bg-opacity-90 transition-all duration-200 hover:scale-105 whitespace-nowrap">
              {window.innerWidth < 768 ? 'Login' : 'Log In'}
            </button>
            <button className="bg-[color:var(--green-color)] text-white px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-2xl lg:rounded-3xl hover:bg-opacity-90 transition-all duration-200 hover:scale-105 whitespace-nowrap">
              Register
            </button>
          </div>
          
          {/* Hamburger Menu - Show on mobile and tablet */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-5 sm:w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-5 sm:w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-5 sm:w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-50 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
        <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-4">
          {/* Navigation Links */}
          <div className="space-y-3 sm:space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`
                  block text-base sm:text-lg font-semibold montserrat-600 transition-colors duration-200 py-2
                  ${pathname === link.href
                    ? 'text-[color:var(--green-color)]'
                    : 'text-gray-700 hover:text-[color:var(--green-color)]'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile Auth Buttons - Show only on mobile */}
          <div className="sm:hidden pt-4 border-t border-gray-200 space-y-3">
            <button className="w-full bg-[color:var(--green-color)] text-white py-3 rounded-2xl hover:bg-opacity-90 transition-all duration-200 montserrat-600 font-semibold">
              Log In
            </button>
            <button className="w-full bg-[color:var(--green-color)] text-white py-3 rounded-2xl hover:bg-opacity-90 transition-all duration-200 montserrat-600 font-semibold">
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Background Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black transition-opacity duration-300 z-40 ${isMobileMenuOpen ? 'bg-opacity-25 visible' : 'bg-opacity-0 invisible'}`}
        onClick={closeMobileMenu}
      ></div>
    </nav>
  )
}

export default _Navbar