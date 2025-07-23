

const ServiceSec = ({ data }: any) => {
    return (
        <>
            <div className="bg-white my-20">
                <div className="w-4/5 m-auto bg-[#F7F7F7]  space-y-7 text-left">
                    <div className="py-10 px-20">
                        <h1 className="text-[30px] montserrat-700 font-bold text-[var(--green-color)]">
                            {data.name}
                            <hr className="border-2 mt-4 text-[var(--green-color)] w-[80px]" />
                        </h1>
                        <p className="mt-12 montserart-400 text-[22px]">
                            {data.desc}
                        </p>

                        <ul className="list-disc montserart-400 text-[20px] mt-10 list-inside ml-6 grid grid-cols-3  gap-x-6 gap-y-2">
                            {
                                data.points.map((point: string) => (
                                    <li>{point}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="action flex montserrat-600 text-[22px] font-semibold">
                        <div className={`w-1/2 ${ data.id%2 == 0 ? `bg-[var(--yellow-color)]`: `bg-[var(--green-color)]`} py-5 flex items-center justify-between`}>
                            <button className=" text-white m-auto px-4 py-2 border border-white">
                                GET A QUOTE
                            </button>
                        </div>
                        <div className={`w-1/2 ${ data.id%2 == 0 ? `bg-[var(--green-color)]`: `bg-[var(--yellow-color)]`}  py-5 flex items-center justify-between`}>
                            <button className=" text-white m-auto px-4 py-2 border border-white">
                                VIEW PROJECTS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceSec