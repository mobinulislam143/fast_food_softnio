import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import About from "./About";
import FoodSlider from "./FoodSlider";
import BookingTable from "./BookingTable";
import Testimonial from "./Testomonial";
import Footer from './Footer'
import './home.css';

const Home = () => {
  return (
    <div>
      {/* Navbar outside of HeroSection */}
      {/* <div className="container mx-auto"> */}
        <Navbar />
      {/* </div> */}

      <div className="herosec lg:px-0 px-[30px]">
        <div className="container mx-auto">
          <HeroSection />
        </div>
      </div>

      <div className="abouts">
        <div className="container mx-auto lg:px-0 px-[30px]">
          <About />
        </div>
      </div>

      <div className="abouts bg-[#FBF7F2]">
        <div className="container mx-auto lg:px-0 px-[30px]">
          <FoodSlider />
        </div>
      </div>

      <div className="bookTable w-full">
        <div className="container mx-auto lg:px-0 px-[30px]">
          <BookingTable />
        </div>
      </div>

      <div className="abouts bg-[#FBF7F2]">
        <div className="container mx-auto lg:px-0 px-[30px]">
          <Testimonial />
        </div>
      </div>
      <div className="footer">
          <div className="container mx-auto lg:px-0 px-[30px]">
            <Footer />
          </div>
        </div> 
    </div>
  );
};

export default Home;
