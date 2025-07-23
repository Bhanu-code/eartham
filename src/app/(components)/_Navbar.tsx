import Image from "next/image"
import Link from "next/link"

import Logo from "../assets/navbar_icons/logo.svg";
import Search from "../assets/navbar_icons/search_icon.svg";

const _Navbar = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between px-10 py-1">
        <div className="left logo-cont">
          <Image src={Logo} width={54} height={54} alt="Logo" />
        </div>

        <div className="right action-btns flex items-center justify-between space-x-5 ">
          <div className="mid nav-links pr-32 flex space-x-14 montserrat-600 text-[15px] font-semibold">
            <Link href={"/"}>
              Home
            </Link>
            <Link href={"/about"}>
              About
            </Link>
            <Link href={"/services"}>
              Services
            </Link>
            <Link href={"/projects"}>
              Projects
            </Link>
            <Link href={"/contact"}>
              Contact
            </Link>
          </div>
          <div className="search-cont bg-[color:var(--green-color)] rounded-full p-2">
            <Image src={Search} height={15} width={15} alt="search" />
          </div>
          <div className="btns space-x-5 montserrat-600 texy-[16px] font-semibold">
            <button className="bg-[color:var(--green-color)] text-white px-8 py-2 rounded-3xl">
              Log In
            </button>
            <button className="bg-[color:var(--green-color)] text-white px-8 py-2 rounded-3xl">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default _Navbar
