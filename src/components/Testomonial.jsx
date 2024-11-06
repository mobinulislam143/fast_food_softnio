import React from "react";
import { FaSquareFull, FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import Slider from "react-slick";

const testimonials = [
  {
    quote: "You can’t go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
    name: "KHALID AL DAMSKY",
    location: "Jeddah, Saudi",
    image: "https://res.cloudinary.com/dmpsrcunj/image/upload/v1730918041/softnio/Image_cuup9k.png"
  },
  {
    quote: "The Mutton Mandi was amazing, full of flavor and tenderness. It's a must-try for everyone!",
    name: "AHMED ALI",
    location: "Dubai, UAE",
    image: "https://res.cloudinary.com/dmpsrcunj/image/upload/v1730918041/softnio/Image_cuup9k.png"
  },
  {
    quote: "Great food with authentic Arabian taste. The Lamb Mandi was superb!",
    name: "FATIMA SAID",
    location: "Riyadh, Saudi",
    image: "https://res.cloudinary.com/dmpsrcunj/image/upload/v1730918041/softnio/Image_cuup9k.png"
  }
];

const Testimonial = () => {
  const sliderRef = React.useRef(null);

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true, // Enables auto height adjustment for different slide content
  };

  return (
    <div className="py-[120px] relative">
      <div className="flex items-center justify-between mb-[60px]">
        <div>
          <h4 className="text-bg_secondary text-[20px] flex items-center gap-3 font-roboto font-bold">
            <FaSquareFull />
            Crispy, Every Bite Taste
          </h4>
          <h2 className="text-[60px] font-bold font-bebas">Popular Food Items</h2>
        </div>
        <div className="lg:flex items-center gap-3 hidden">
          <button
            onClick={handlePrevClick}
            className="p-2 rounded-full bg-white text-gray-700 shadow-md text-xl"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNextClick}
            className="p-2 rounded-full bg-white text-bg_secondary text-xl"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between bg-bg_primary text-gray-800 z-10 relative">
        <img src="https://res.cloudinary.com/dmpsrcunj/image/upload/v1730708561/softnio/Group_f5n4nh.png" className="absolute left-0 lg:bottom-8 bottom-20  w-10" alt="" />
        <Slider ref={sliderRef} {...settings} className="lg:max-w-md lg:ml-[85px] lg:pr-[85px] p-[25px] w-full">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col justify-between h-full">
              <div>
                <span className="text-[60px] font-sans">“</span>
                <p className="text-3xl leading-tight mb-4 lg:p-0 p-[20px] flex items-start font-roboto">
                  {testimonial.quote}
                </p>
              </div>
              <div>
                <div className="flex justify-between items-center mt-6 border-b-2 relative border-black pb-[18px]">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-700">{testimonial.location}</p>
                  </div>
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src={testimonial.image}
                    alt={`${testimonial.name} profile`}
                  />
                  <div className="absolute bottom-[-2px] right-0 bg-bg_secondary w-[63px] h-2"></div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Right side - Video thumbnail */}
        <div className="relative lg:w-[763px] lg:h-[555px] w-full h-80">
          <img
            src="https://res.cloudinary.com/dmpsrcunj/image/upload/v1730917203/softnio/ayshu-laham-inarticle-550x350-1_obavoi.jpg"
            alt="Mandi dish"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-bg_primary text-black p-4 rounded-full shadow-lg focus:outline-none">
              <FaPlay />
            </button>
          </div>
        </div>
      </div>
      <div className="lg:hidden items-center gap-3 flex justify-center mt-3">
        <button
          onClick={handlePrevClick}
          className="p-2 rounded-full bg-white hover:bg-slate-200 text-gray-700 shadow-md text-xl"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNextClick}
          className="p-2 rounded-full bg-white hover:bg-slate-200 text-bg_secondary text-xl"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Background Images */}
      <img
        className="absolute lg:block hidden w-[566px] h-[303px] bottom-[170px] right-[-398px] rotate-[43deg] z-0"
        src="https://res.cloudinary.com/dmpsrcunj/image/upload/v1730708744/softnio/9b917e102566625163272be6d10f8e7f_j3tivn.png"
        alt="background-img1"
      />
      <img
        className="absolute lg:block hidden w-[307px] top-[165px] rotate-[279deg] left-[-332px]"
        src="https://res.cloudinary.com/dmpsrcunj/image/upload/v1730708820/softnio/817344e5326be29f84754f858123edd4_lqglae.png"
        alt="background-img2"
      />
    </div>
  );
};

export default Testimonial;
