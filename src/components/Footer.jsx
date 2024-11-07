import React from "react"
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full">
      <h2 className="text-[50px] font-bold font-bebas lg:leading-3 leading-[52px] text-center text-white ">We ready to have you the best dining experiences</h2>
      <div className="lg:grid grid-cols-4 items-center mx-auto pt-12 lg:space-y-0 space-y-5">
        <div className="text-center flex flex-col items-center">
          <MdOutlineWatchLater className="text-bg_primary text-3xl" />
          <h2 className="text-[24px] pt-[24px] pb-3 font-bold font-bebas text-white">Popular Food Items</h2>
          <p className="font-roboto text-[16px] text-white pb-4px">Monday-Sunday</p>
          <p className="font-roboto text-[16px] text-white">9.30 AM to 11:30 PM</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <MdOutlinePhoneInTalk className="text-bg_primary text-3xl" />
          <h2 className="text-[24px] pt-[24px] pb-3 font-bold font-bebas text-white">Let's talk</h2>
          <p className="font-roboto text-[16px] text-white pb-4px">Phone: 0158585395</p>
          <p className="font-roboto text-[16px] text-white">Fax: 1800-222-4545</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <CiMail className="text-bg_primary text-3xl" />
          <h2 className="text-[24px] pt-[24px] pb-3 font-bold font-bebas text-white">Book Table</h2>
          <p className="font-roboto text-[16px] text-white pb-4px">Email: fastfood@gmail.com</p>
          <p className="font-roboto text-[16px] text-white">Support: support@fastfood.com</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <SlLocationPin className="text-bg_primary text-3xl" />
          <h2 className="text-[24px] pt-[24px] pb-3 font-bold font-bebas text-white">Our Address</h2>
          <p className="font-roboto text-[16px] text-white pb-4px">123 New York city, United </p>
          <p className="font-roboto text-[16px] text-white">State of America</p>
        </div>

      </div>

      <div className="pt-[100px]">
        <div className="text-center flex gap-3 flex-row justify-center">
          <FaFacebook className="text-white text-2xl cursor-pointer border rounded-full p-2 w-10 h-10 flex items-center justify-center" />
          <RiTwitterXFill className="text-white text-2xl cursor-pointer border rounded-full p-2 w-10 h-10 flex items-center justify-center" />
          <FaInstagramSquare className="text-white text-2xl cursor-pointer border rounded-full p-2 w-10 h-10 flex items-center justify-center" />
          <FaLinkedin className="text-white text-2xl cursor-pointer border rounded-full p-2 w-10 h-10 flex items-center justify-center" />
        </div>

        <p className="font-montserrant text-[21px] pt-6 text-center text-white">© 2023 <span className="text-bg_primary">Niomax</span> All Rights Reserved </p>
      </div>
    </div>
  )
};

export default Footer
