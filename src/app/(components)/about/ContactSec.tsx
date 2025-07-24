import Image from "next/image";
import RightArrow from "../../assets/about/arrow_right.svg";

import Helmet from "../../assets/about/helmet.svg"
import PaintBrush from "../../assets/about/paintbrush'.svg"
import Screws from "../../assets/about/screws.svg"

const ContactSec = () => {
    return (
        <>
            <div className="contact w-11/12 my-10 mb-50 flex flex-col-reverse md:flex-row items-center  m-auto justify-between md:gap-x-10 lg:gap-x-20">
                <div className="left w-11/12 md:w-1/2">
                    <h1 className="text-[40px] md:text-[55px] text-nowrap monytserrat-600 font-semibold text-[var(--green-color)] my-5">Reques a Qute</h1>
                    <div className="grid grid-cols-2 items-center justify-between gap-5 text-[#00000040]">
                        <input type="text" placeholder="Full Name" className="border p-2" />
                        <input type="text" placeholder="E-Mail" className="border p-2" />
                        <input type="text" placeholder="Phone Bumber" className="border p-2" />
                        <input type="text" placeholder="Select Service" className="border p-2" />
                        <textarea name="text" placeholder="Message" className="border p-2 h-42 col-span-2" />
                    </div>
                    <button className="rounded-[50px] text-[20px] montserrat-400 flex items-center space-x-5 bg-[var(--green-color)] mt-10 px-10 py-3 text-white">
                        Appointment
                        <Image className="inline" src={RightArrow} height={20} width={20} alt="arrow" />
                    </button>
                </div>
                <div className="right w-11/12 m-auto md:mx-0 md:flex-1 flex flex-col gap-y-10">
                    <div className="w-[487px] flex  gap-x-10 items-center justify-center ml-auto">
                        <div className="left">
                            <Image src={Helmet} height={100} width={100} alt="helemt" />
                        </div>
                        <div className="right">
                            <h1 className="font-bold text-[var(--green-color)] montserrat-700 text-[17px]">High Quality Build</h1>
                            <p className="montserrat-400 w-1/2 lg:w-full text-[17px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate s.</p>
                        </div>
                    </div>
                    <div className="w-[487px] flex  gap-x-10 items-center justify-center ml-auto">
                        <div className="left">
                            <Image src={PaintBrush} height={100} width={100} alt="helemt" />
                        </div>
                        <div className="right">
                            <h1 className="font-bold text-[var(--green-color)] montserrat-700 text-[17px]">High Quality Build</h1>
                            <p className="montserrat-400 w-1/2 lg:w-full text-[17px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate s.</p>
                        </div>
                    </div>
                    <div className="w-[487px] flex  gap-x-10 items-center justify-center ml-auto">
                        <div className="left">
                            <Image src={Screws} height={100} width={100} alt="helemt" />
                        </div>
                        <div className="right">
                            <h1 className="font-bold text-[var(--green-color)] montserrat-700 text-[17px]">High Quality Build</h1>
                            <p className="montserrat-400 w-1/2 lg:w-full text-[17px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate s.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ContactSec