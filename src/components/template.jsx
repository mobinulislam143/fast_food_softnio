import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const templ = () => {
  const [isOpen, setIsOpen] = useState(false);
// 
  return (
    <nav>
      <div className="grid lg:grid-cols-8 grid-cols-2">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3  lg:col-span-2 ">
          <img
            src="https://res.cloudinary.com/dmpsrcunj/image/upload/v1730713874/softnio/Frame_v3jk0s.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold">
            Restuarant
          </span>
        </Link>
        
        {/* Menu Icon for Small Screens */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex sm:col-span-2 items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none"
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
          className={`${isOpen ? 'block' : 'hidden'} md:block `}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <Link
                to="#"
                className="block py-2 px-3 rounded md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 px-3 rounded md:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 px-3 rounded md:p-0"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 px-3 rounded md:p-0"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 px-3 rounded md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>

          <NavLink className="btn px-5 py-3 rounded-none bg-bg_primary text-[16px] font-roboto border-none">Book A Table</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default templ;
