import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 lg:px-0 px-7 z-50 transition-colors duration-300 ${isScrolled ? 'bg-bg_secondary shadow-lg' : ''
        }`}
      style={{
        backgroundImage: isScrolled
          ? ''
          : 'linear-gradient(130deg, #BD1F17, #A51D13, #8E1B0F), url("https://res.cloudinary.com/dmpsrcunj/image/upload/v1730708562/softnio/Rectangle_4_1_ru9bsp.png")',
        // backgroundSize: 'cover, cover',
        // backgroundPosition: 'center, center',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className='contin'>
        <div className="flex items-center justify-between py-[32px] gap-16">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://res.cloudinary.com/dmpsrcunj/image/upload/v1730713874/softnio/Frame_v3jk0s.png"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-white text-2xl font-semibold">
              Restaurant
            </span>
          </Link>

          {/* Menu Icon for Small Screens */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`justify-between items-center w-full lg:flex hidden`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col space-y-2 sm:grid sm:grid-cols-2 sm:gap-4 md:flex md:flex-row md:space-y-0 text-white">
              <li>
                <Link to="#" className="block py-2 px-3 rounded md:p-0">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="block py-2 px-3 rounded md:p-0">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="block py-2 px-3 rounded md:p-0">
                  Services
                </Link>
              </li>
              <li>
                <Link to="#" className="block py-2 px-3 rounded md:p-0">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="block py-2 px-3 rounded md:p-0">
                  Contact
                </Link>
              </li>
            </ul>

            <NavLink className="btn px-5 py-3 rounded-none bg-bg_primary text-[16px] font-roboto border-none mt-4 md:mt-0">
              Book A Table
            </NavLink>
          </div>
        </div>

        {/* Small Screen Menu Toggle */}
        {isOpen && (
          <div className="shadow-lg lg:hidden p-4 grid grid-cols-2 gap-4 sm:grid sm:grid-cols-2">
            <ul className="font-medium text-white space-y-2">
              <li>
                <Link to="#" className="block py-2 px-3 rounded">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="block py-2 px-3 rounded">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="block py-2 px-3 rounded">
                  Services
                </Link>
              </li>
              <li>
                <Link to="#" className="block py-2 px-3 rounded">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="block py-2 px-3 rounded">
                  Contact
                </Link>
              </li>
            </ul>

            <NavLink className="col-span-2 btn w-full px-5 py-3 mt-4 bg-bg_primary text-[16px] font-roboto border-none">
              Book A Table
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
