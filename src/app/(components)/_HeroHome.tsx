import Image from "next/image";
import GreenBg from "../../../public/hero_home_icons/greenbg.png"
import Slide2 from "../../../public/hero_home_icons/slide2.png"
import Slide1 from "../../../public/hero_home_icons/slide1.png"

const _HeroHome = () => {
    return (
        <>
            <div className="w-full space-y-1 text-[color:var(--green-color)] overflow-hidden montserrat-400">
                <div className="pl-20 pt-10 pb-2">
                    <h2 className="text-[color:var(--green-color)] text-[25px]">Crafting Landmarks,</h2>
                    <h1 className="text-[35px]">Shaping Legacy.</h1>
                    <button className="px-10 montserrat-600 font-semibold py-2 mt-7 text-[color:var(--green-color)] border-[color:var(--green-color)] rounded-3xl border-2">
                        Reach Us
                    </button>
                </div>

                <div className="hero-bg w-screen top-10 relative">
                    <Image className="w-full relative top-5 z-0" src={GreenBg} height={300} width={900} alt="hero-bg" />
                    <Image className="absolute z-10 bottom-0 right-1 border-red-800" src={Slide2} height={1050} width={1050} alt="hero-bg" />
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-20"></div>
                </div>
            </div>
        </>
    )
}

export default _HeroHome