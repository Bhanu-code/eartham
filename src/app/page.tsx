

import HeroHome from "./(components)/_HeroHome";
import Cred from "./(components)/_Cred"
import About from "./(components)/_About"
import AboutDesc from "./(components)/_AboutDesc";
import WhyChoose from "./(components)/_WhyChoose";
// import Testimonials from "./(components)/_Testmonials";

export default function Home() {
  return (
    <div className="overflow-hidden">
    <HeroHome/>
    <Cred/>
    <About/>
    <AboutDesc/>
    <WhyChoose/>
    {/* <Testimonials/> */}
    </div>
     
  );
}
