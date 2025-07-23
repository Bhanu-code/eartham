import Image from "next/image"
import Slide2 from "../../../../public/hero_home_icons/slide2.png"
import Fb from "../../assets/contact/facebook.svg"
import Tw from "../../assets/contact/twitter.svg"
import Lk from "../../assets/contact/linkedin.svg"
import VLine from "../../assets/contact/Vector 22.svg"

const Hero = () => {
    return (
        <>
            <div className="w-full flex">
                <div className="left relative w-[861px] bg-[#1F1F1FD9]">
                    <Image className='opacity-40' src={Slide2} width={861} alt='slide' />
                    <div className="absolute top-40 left-20 w-4/5 m-auto text-white space-y-10">
                        <div className="flex items-center space-x-3">
                            <Image className=' inline' src={VLine} height={80} alt='slide' />
                            <h1 className="text-[64px] montserrat-700 font-bold">Contact Us</h1>
                        </div>
                        <p className="montserrat-400  text-[22px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio.</p>
                    </div>
                </div>
                <div className="right flex-1 px-15 pt-20 py-10">
                    <h1 className=" text-[var(--green-color)] text-[32px] montserrat-700 ">Contact Info</h1>
                    <h3 className="font-bold text-[16px] montserrat-700  text-[var(--green-color)] mt-8">Our Office</h3>
                    <p className="text-[#2A2A2A] montserrat-400 text-[15px]  mt-3">1234 Divi St. #1000, San Francisc, CA 93251</p>
                    <h3 className="text-[var(--green-color)] font-bold text-[16px] montserrat-700  mt-8">Open Office Hours</h3>
                    <p className="mt-3 text-[#2A2A2A] montserrat-400 text-[15px] ">M-F: 9am – 6pm S-S: 10am – 4pm</p>
                    <h3 className="text-[var(--green-color)] font-bold text-[16px] montserrat-700  mt-8">Get in Touch</h3>
                    <p className="mt-3 text-[#2A2A2A] montserrat-400 text-[15px] ">constructioninc.com</p>
                    <p className="text-[#2A2A2A] montserrat-400 text-[15px] ">(346) 426-2351</p>

                    <div className="socials flex items-center space-x-8 mt-15">
                        <Image src={Fb} width={23} alt='fb' />
                        <Image src={Tw} width={23} alt='fb' />
                        <Image src={Lk} width={23} alt='fb' />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero