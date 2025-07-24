import Clients from "@/app/(components)/services/Clients"
import Hero from "@/app/(components)/services/Hero"
import ServiceSec from "@/app/(components)/services/ServiceSec"
import ServicesSec from "@/app/(components)/services/ServicesSec"
import { services } from "@/app/utils/constant"

interface Service {

  id: number;
  name: string;
  desc: string;
  points: string[];
}



const page = () => {
  return (
    <>
      <Hero />
      <ServicesSec />
      <Clients />
      {
        services.map((service: Service, index: number) => (
          <ServiceSec key={index} data={service} />
        ))
      }
    </>
  )
}

export default page
