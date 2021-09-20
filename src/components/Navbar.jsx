import React from "react";
import { Link } from "react-router-dom";

// Components
import Container from "./layout/Container";

// Logo
import Logo from "../assets/img/footer.svg";
const Navbar = () => {
  return (
    <nav className="py-5 font-poppins font-medium text-sm text-primary shadow-sm h-16">
      <Container>
        <div className="flex items-center lg:justify-start">
          <div className="w-6/12">
            <img src={Logo} alt="logo-website" />
          </div>
          <div className="w-6/12 flex justify-end lg:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="hidden lg:block lg:w-6/12">
            <ul className="flex lg:justify-end lg:space-x-10 items-center">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <button className="bg-primary-color text-white px-5 py-2 rounded-lg tracking-wide transition-all duration-300 hover:bg-third-color">
                  Daftar Vaksin
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
