import Image from 'next/image';
import React from 'react';

import Icon1 from '../../assets/services/icon.svg';
import Icon2 from '../../assets/services/icon (1).svg';
import Icon3 from '../../assets/services/icon (2).svg';
import Icon4 from '../../assets/services/icon (3).svg';
import Icon5 from '../../assets/services/icon (4).svg';
import Icon6 from '../../assets/services/icon (5).svg';

const ServicesSec: React.FC = () => {
  return (
    <div className="w-full py-10 sm:py-14 md:py-20">
      <div className="wrapper w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-center montserrat-700 font-bold text-[#292E3D] text-[24px] sm:text-[30px] md:text-[36px]">
          Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 my-6 sm:my-8 md:my-10 text-[var(--green-color)] place-items-center">
          {/* Item 1 */}
          <div className="item shadow-lg bg-white w-full max-w-[271px] h-[181px] flex flex-col items-center justify-center">
            <Image src={Icon1} width={40} height={40} alt="icon" className="w-10 h-10 sm:w-[50px] sm:h-[50px]" />
            <hr className="w-[2rem] my-4 mx-auto text-[#E0E3EB]" />
            <h2 className="montserrat-600 font-semibold text-[16px] sm:text-[18px] md:text-[20px]">
              Construction
            </h2>
          </div>
          {/* Item 2 */}
          <div className="item shadow-lg bg-[#DDC258] text-white w-full max-w-[271px] h-[181px] flex flex-col items-center justify-center">
            <Image src={Icon2} width={40} height={40} alt="icon" className="w-10 h-10 sm:w-[50px] sm:h-[50px]" />
            <hr className="w-[2rem] my-4 mx-auto" />
            <h2 className="montserrat-600 font-semibold text-[16px] sm:text-[18px] md:text-[20px]">
              Renovation
            </h2>
          </div>
          {/* Item 3 */}
          <div className="item shadow-lg bg-white w-full max-w-[271px] h-[181px] flex flex-col items-center justify-center">
            <Image src={Icon3} width={40} height={40} alt="icon" className="w-10 h-10 sm:w-[50px] sm:h-[50px]" />
            <hr className="w-[2rem] my-4 mx-auto" />
            <h2 className="montserrat-600 font-semibold text-[16px] sm:text-[18px] md:text-[20px]">
              Consultation
            </h2>
          </div>
          {/* Item 4 */}
          <div className="item shadow-lg bg-[var(--green-color)] text-white w-full max-w-[271px] h-[181px] flex flex-col items-center justify-center">
            <Image src={Icon4} width={40} height={40} alt="icon" className="w-10 h-10 sm:w-[50px] sm:h-[50px]" />
            <hr className="w-[2rem] my-4 mx-auto" />
            <h2 className="montserrat-600 font-semibold text-[16px] sm:text-[18px] md:text-[20px]">
              Architecture
            </h2>
          </div>
          {/* Item 5 */}
          <div className="item shadow-lg bg-white w-full max-w-[271px] h-[181px] flex flex-col items-center justify-center">
            <Image src={Icon5} width={40} height={40} alt="icon" className="w-10 h-10 sm:w-[50px] sm:h-[50px]" />
            <hr className="w-[2rem] my-4 mx-auto" />
            <h2 className="montserrat-600 font-semibold text-[16px] sm:text-[18px] md:text-[20px]">
              Turnkey Solutions
            </h2>
          </div>
          {/* Item 6 */}
          <div className="item shadow-lg bg-[var(--green-color)] text-white w-full max-w-[271px] h-[181px] flex flex-col items-center justify-center">
            <Image src={Icon6} width={40} height={40} alt="icon" className="w-10 h-10 sm:w-[50px] sm:h-[50px]" />
            <hr className="w-[2rem] my-4 mx-auto" />
            <h2 className="montserrat-600 font-semibold text-[16px] sm:text-[18px] md:text-[20px]">
              Electric
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSec;