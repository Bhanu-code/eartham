import React from 'react';

interface ServiceData {
  id: number;
  name: string;
  desc: string;
  points: string[];
}

interface ServiceSecProps {
  data: ServiceData;
}

const ServiceSec: React.FC<ServiceSecProps> = ({ data }) => {
  return (
    <div className="w-full bg-white my-10 sm:my-14 md:my-20">
      <div className="w-full max-w-[1200px] mx-auto bg-[#F7F7F7] space-y-6 sm:space-y-7 px-4 sm:px-6 md:px-8">
        <div className="py-6 sm:py-8 md:py-10 px-4 sm:px-10 md:px-16 lg:px-20">
          <h1 className="text-[24px] sm:text-[28px] md:text-[30px] montserrat-700 font-bold text-[var(--green-color)]">
            {data.name}
            <hr className="border-2 mt-3 sm:mt-4 text-[var(--green-color)] w-[60px] sm:w-[80px]" />
          </h1>
          <p className="mt-6 sm:mt-8 md:mt-12 montserrat-400 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
            {data.desc}
          </p>
          <ul className="montserrat-400 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mt-6 sm:mt-8 md:mt-10 ml-4 sm:ml-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-2">
            {data.points.map((point, index) => (
              <li className='text-left list-disc ml-4 pl-2' key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="action flex flex-col sm:flex-row montserrat-600 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-semibold">
          <div
            className={`w-full sm:w-1/2 ${
              data.id % 2 === 0 ? 'bg-[var(--yellow-color)]' : 'bg-[var(--green-color)]'
            } py-4 sm:py-5 flex items-center justify-center`}
          >
            <button className="text-white mx-auto px-3 py-1 sm:px-4 sm:py-2 border border-white">
              GET A QUOTE
            </button>
          </div>
          <div
            className={`w-full sm:w-1/2 ${
              data.id % 2 === 0 ? 'bg-[var(--green-color)]' : 'bg-[var(--yellow-color)]'
            } py-4 sm:py-5 flex items-center justify-center`}
          >
            <button className="text-white mx-auto px-3 py-1 sm:px-4 sm:py-2 border border-white">
              VIEW PROJECTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSec;