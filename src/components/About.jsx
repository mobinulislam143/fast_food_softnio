import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IoCubeOutline } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";
import { RiShoppingBag4Line } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";


const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const content = {
    about: {
      title: "EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.",
      phone: "+88 3426 739 485",
    },
    experience: {
      title: "OUR CULINARY JOURNEY",
      text: "Discover our story and how we bring flavors to life. Our chefs have years of experience, delivering unmatched quality and unforgettable tastes.",
      phone: "+88 3426 739 485",
    },
    contact: {
      title: "GET IN TOUCH WITH US",
      text: "We'd love to hear from you! Reach out for reservations, inquiries, or feedback. We are here to make your dining experience memorable.",
      phone: "+88 3426 739 485",
    },
  };

  const progressValue = 80;
  return (
    <div>
      <div className="relative lg:flex items-start gap-[65px] mt-[120px] ">
        <div className="relative">

          <div className='imgs lg:w-[500px] '>
            <img className="w-full lg:h-[420px]" src="https://res.cloudinary.com/dmpsrcunj/image/upload/v1730709071/softnio/market_fvdolw.jpg" alt="" />
          </div>

          <div className="flex items-center justify-center bg-white p-[20px] rounded-[20px] absolute top-[30px] left-[30px] lg:w-[241px] lg:h-[136px] w-[128px] h-[74px]">
            <div style={{ width: 150, }}>
              <div className="relative lg:w-20  lg:h-20 ">
                <CircularProgressbar
                  value={progressValue}
                  text={`50+`}
                  styles={buildStyles({
                    textSize: '28px',
                    textColor: '#000',
                    pathColor: '#FEBF00',
                    trailColor: '#F1F1F1',
                    strokeLinecap: 'round',
                  })}
                />

                {/* Endpoint circle */}
                <div
                  className="absolute lg:w-[16px] lg:h-[16px] w-[8px] h-[8px] lg:top-[21px] lg:left-[9px] top-[7px] left-[3px] bg-white lg:border-4 border border-bg_primary rounded-full"
                  style={{
                    transform: 'translate(-50%, -50%)',
                  }}
                ></div>
              </div>
            </div>
            <div className="ml-4 text-black">
              <p className="lg:text-lg text-[8px] font-semibold">Market</p>
              <p className="lg:text-lg text-[8px] font-semibold">Experiences</p>
            </div>
          </div>

        </div>
        <div>
          <div className="lg:py-0 py-[30px]">
            {/* Tabs */}
            <div className="flex space-x-6 border-b-2  border-bg_secondary">
              {["about", "experience", "contact"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-lg font-semibold text-[14px] lg:px-[16px] px-[10px] py-1 lg:py-[6px] ${activeTab === tab
                    ? "text-white bg-bg_secondary"
                    : "text-gray-600 hover:text-bg_secondary"
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="pt-5">
              <h2 className="lg:text-4xl text-3xl font-bold text-gray-800 font-bebas text-[50px] leading-[62px]">
                {content[activeTab].title}
              </h2>
              <p className="py-4 text-gray-700  leading-relaxed text-[16px]">
                {content[activeTab].text}
              </p>
              <div className="flex items-center">
                <button className="btn lg:px-6 px-4 lg:py-2 py-1 bg-bg_primary hover:bg-[#e8af02] text-black font-roboto text-lg font-semibold  mr-4">
                  ABOUT MORE
                </button>
                <div className="flex items-center font-bold text-lg">
                  <span className="text-bg_secondary"><LuPhoneCall /></span>
                  <span className="text-[18px]">{content[activeTab].phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

          <img className=' w-[340px] h-[340px] lg:block hidden absolute bottom-[-224px] right-[-368px]' src="https://res.cloudinary.com/dmpsrcunj/image/upload/v1730826714/softnio/top-view-bell-pepper-pepper-sliced-black-bowl-white-horizontal_2_qgndfq.png" alt="img5" />
        

      </div>



      <div>
        <div className='lg:grid lg:pt-[74px] lg:pb-[120px] pt-[50px] pb-[35px] lg:grid-cols-3 grid-cols-1 lg:space-y-0 space-y-[32px] items-center justify-start'>
          <div className='flex items-center space-x-3'>
            <div className='flex items-center justify-center'>
              <IoCubeOutline className='text-[60px] font-semibold bg-white shadow-xl p-4 rounded-full text-bg_secondary' />
            </div>

            <div className='pt-[12px]'>
              <h2 className='font-bebas text-[30px] leading-[30px]'>Fast Delivery</h2>
              <p className='text-[20px] font-inter'>Within 30 minutes</p>
            </div>


          </div>
          <div className='flex items-center space-x-3'>
            <div className='flex items-center justify-center'>
              <SlBadge  className='text-[60px] font-semibold bg-white shadow-xl p-4 rounded-full text-bg_secondary' />
            </div>

            <div className='pt-[12px]'>
              <h2 className='font-bebas text-[30px] leading-[30px]'>absolute dining</h2>
              <p className='text-[20px] font-inter'>Best buffet restaurant</p>
            </div>


          </div>
          <div className='flex items-center space-x-3'>
            <div className='flex items-center justify-center'>
              <RiShoppingBag4Line className='text-[60px] font-semibold bg-white shadow-xl p-4 rounded-full text-bg_secondary' />
            </div>

            <div className='pt-[12px]'>
              <h2 className='font-bebas text-[30px] leading-[30px]'>pickup delivery</h2>
              <p className='text-[20px] font-inter'>Grab your food order</p>
            </div>


          </div>
        </div>
      </div>

    </div>
  )
};

export default About
