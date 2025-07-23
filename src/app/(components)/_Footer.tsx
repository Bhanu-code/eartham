import Link from "next/link";

import Message from '../assets/footer_icons/Message.svg';
import Chat from '../assets/footer_icons/Chat.svg';
import Calendar from '../assets/footer_icons/Calendar.svg';
import Security from '../assets/footer_icons/Security.svg';
import Time from '../assets/footer_icons/Time.svg';
import Image from "next/image";


const _Footer = () => {
  return (
    <>
      <div className="w-full footer-wrapper footer text-white bg-[color:var(--green-color)] py-10">
        <div className="cont w-1/2 m-auto flex flex-col items-center justify-center space-y-8">
          <h1>EARTHAM</h1>
          <div className="footer-links space-x-8">
            <Link href={"/"}>
              Home
            </Link>
            <Link href={"/about_lk"}>
              About LK
            </Link>
            <Link href={"/services"}>
              Services
            </Link>
            <Link href={"/projects"}>
              Projects
            </Link>
            <Link href={"/up_coming"}>
              Up Coming
            </Link>
            <Link href={"/contact_lk"}>
              Contact LK
            </Link>
          </div>
          <div className="footer-icons flex space-x-8">
            <Image className="bg-white rounded-full p-2" src={Message} width={40} height={40} alt="message" />
            <Image className="bg-white rounded-full p-2" src={Calendar} width={40} height={40} alt="message" />
            <Image className="bg-white rounded-full p-2" src={Chat} width={40} height={40} alt="message" />
            <Image className="bg-white rounded-full p-2" src={Security} width={40} height={40} alt="message" />
            <Image className="bg-white rounded-full p-2" src={Time} width={40} height={40} alt="message" />
          </div>
          <h2 className="copyright">All rights reserved 2025.</h2>

        </div>

      </div>
    </>
  )
}

export default _Footer
