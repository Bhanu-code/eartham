import Clients from "@/app/(components)/services/Clients"
import Hero from "@/app/(components)/services/Hero"
import ServiceSec from "@/app/(components)/services/ServiceSec"
import ServicesSec from "@/app/(components)/services/ServicesSec"
import { services } from "@/app/utils/constant"


const page = () => {
  return (
    <>
      <Hero/>
      <ServicesSec/>
      <Clients/>
      {
        services.map((service: object, index: number)=>(
          <ServiceSec key={index} data={service} />
        ))
      }
    </>
  )
}

export default page
