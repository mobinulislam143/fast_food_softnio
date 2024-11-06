import React from "react"
import { FaSquareFull } from "react-icons/fa";

const BookingTable = () => {
  return (
    <div className="py-[120px]">
      <div className="text-white ">
          <h4 className="text-bg_secondary text-[20px] flex items-center gap-3 font-roboto font-bold">
              <FaSquareFull />
              Book Now
            </h4>        
            
            <h1 className="text-[62px] font-bold mb-4 font-bebas">BOOK YOUR TABLE</h1>
            <p className="text-[#F7F8F9] font-roboto text-[16px] mb-6">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo <br/> molestie vel, ornare non id blandit netus.
            </p>
        <form className="lg:w-[635px] md:w-[630px] w-auto">
          <div className="flex flex-col lg:flex-row lg:gap-x-4 gap-y-4 mb-[24px]">
            <input
              type="text"
              placeholder="Your Name *"
              className="lg:w-1/2 w-full p-3 bg-transparent text-white focus:outline-none  focus:border-bg_primary border-2 border-white "
            />
            <input
              type="email"
              placeholder="Your Email"
              className="lg:w-1/2 w-full p-3 bg-transparent text-white focus:outline-none  focus:border-bg_primary border-2 border-white "
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-x-4 gap-y-4 mb-[24px]">
            <input
              type="date"
              placeholder="Reservation Date"
              className="lg:w-1/2 p-3 bg-transparent text-white focus:outline-none  focus:border-bg_primary border-2 border-white "
            />
            <input
              type="number"
              placeholder="Total People"
              className="lg:w-1/2 p-3 bg-transparent text-white focus:outline-none  focus:border-bg_primary border-2 border-white "
            />
          </div>
          <textarea
            placeholder="Message"
            className="w-full p-3 bg-transparent text-white rounded-md esize-none focus:outline-none focus:border-bg_primary border-2 border-white  mb-[16px]"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-bg_primary text-black font-bold rounded-md hover:bg-yellow-600 focus:outline-none  focus:ring-yellow-500"
          >
            BOOK NOW
          </button>
        </form>
      </div>

    </div>
  )
};

export default BookingTable
