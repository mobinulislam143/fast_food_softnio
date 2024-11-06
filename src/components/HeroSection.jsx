import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="pb-[160px] lg:pt-[130px] pt-0 flex flex-col lg:flex-row items-start">

        {/* Text Section */}
        <div className="text-white z-10 relative lg:w-1/2">
          <h1
            style={{
              backgroundImage:
                "linear-gradient(230deg, rgba(181, 43, 29, 0.71), rgba(255, 255, 255, 0))",
            }}
            className="font-bebas lg:w-[730px] w-auto font-bold text-[95px] leading-[104px] py-5 pr-4"
          >
            TASTE THE AUTHENTIC <br /> SAUDI CUISINE
          </h1>
          <p className="text-2xl font-roboto pt-4 pb-8 leading-8">
            Among the best Saudi chefs in the world, <br /> serving you something beyond flavor.
          </p>
          <NavLink
            className="btn px-5 py-3 uppercase rounded-none bg-bg_primary hover:bg-[#e8af02] text-[16px] font-roboto border-none mt-4 md:mt-0"
          >
            Explore Menu
          </NavLink>
        </div>

        {/* Image Section */}
        <div className="relative lg:w-1/2 flex justify-center lg:justify-end lg:relative">
          <img
            className="lg:w-[550px] lg:h-[600px] lg:absolute lg:top-[-107px] w-full h-auto mt-8 lg:mt-0 scale-x-[-1]"
            src="https://res.cloudinary.com/dmpsrcunj/image/upload/v1730709558/softnio/134a1d5ba19b25b4daf3a6c032ddbd7a_2_qhtfbq.webp"
            alt="herosec-img"
          />

          <div className="w-11 h-11 absolute lg:top-[-139px] lg:right-[-25px] top-[-1px] right-[-26px]">
            <img
              src="https://res.cloudinary.com/dmpsrcunj/image/upload/v1730746511/softnio/Vector_ng6stx.png"
              className="w-full"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute lg:bottom-[80px] lg:right-[-77px] bottom-[175px] right-[10px]">
        <span className="flex items-center justify-center relative z-10 w-[160px] h-[160px] p-2 bg-bg_primary rounded-full">
          <div className="flex items-center justify-center w-full h-full bg-bg_primary rounded-full border-[4px] border-dashed border-bg_secondary">
            <h1 className="text-center text-[36px] font-bold font-bebas text-[#1d2636] leading-tight">
              TODAY<br />OFFER
            </h1>
          </div>
        </span>
      </div>


    </div>
  );
};

export default HeroSection;
