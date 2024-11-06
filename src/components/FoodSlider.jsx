import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaSquareFull, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FoodSlider = () => {
  const foodItems = [
    {
      name: "Vegetables Burger",
      image: "https://res.cloudinary.com/dmpsrcunj/image/upload/v1730836830/softnio/Frame_1707478074_mi9oem.png",
      cuisine: "Barbecue Italian cuisine pizza",
    },
    {
      name: "Special Pizza",
      image: "https://res.cloudinary.com/dmpsrcunj/image/upload/v1730709269/softnio/pizza_1_etcrli.png",
      cuisine: "Barbecue Italian cuisine pizza",
    },
    {
      name: "Special French Fries",
      image: "https://res.cloudinary.com/dmpsrcunj/image/upload/v1730836834/softnio/french-fries_1_alpuvg.png",
      cuisine: "Barbecue Italian cuisine",
    },
    {
      name: "Cuisine Chicken",
      image: "https://res.cloudinary.com/dmpsrcunj/image/upload/v1730836849/softnio/c96692a063207f1692d13a65e436d78b_obbj9p.jpg",
      cuisine: "Japanese Cuisine Chicken",
    },
  ];

  const sliderRef = React.useRef(null);

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Slide every 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-[120px] relative">
      <div>
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
        <Slider {...settings} ref={sliderRef}>
          {foodItems.map((item, index) => (
            <div key={index} className="pr-4">
              <div className="bg-white px-3 py-8 rounded-lg shadow-lg text-center">
                <div className="w-24 h-24 mx-auto mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="w-[57px] h-1 mx-auto bg-bg_secondary"></div>
                <h3 className="text-2xl font-bebas font-bold">{item.name}</h3>
                <p className="font-inter text-[15px] text-[#0A1425]">{item.cuisine}</p>
              </div>
            </div>
          ))}
        </Slider>
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
      </div>
      <img
        src="https://res.cloudinary.com/dmpsrcunj/image/upload/v1730826714/softnio/top-view-bell-pepper-pepper-sliced-black-bowl-white-horizontal_2_qgndfq.png"
        className="absolute left-[-465px] top-[145px] rotate-[306deg]"
        alt=""
      />
    </div>
  );
};

export default FoodSlider;
