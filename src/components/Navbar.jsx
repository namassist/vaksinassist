import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Container from "./layout/Container";

// Logo
import Logo from "../assets/img/footer.svg";
const Navbar = () => {
  const [offCanvas, setOffCanvas] = useState();

  return (
    <nav className="py-5 font-poppins font-medium text-sm text-primary shadow-sm h-16 relative">
      <Container>
        <div className="flex items-center lg:justify-start">
          <div className="w-6/12">
            <Link to="/">
              <img src={Logo} alt="logo-website" />
            </Link>
          </div>
          <div className="w-6/12 flex justify-end lg:hidden cursor-pointer">
            <button
              onClick={() => {
                setOffCanvas(!offCanvas);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className={`w-full h-full fixed top-0 lg:static lg:w-6/12 bg-fourth-color z-10 p-10 lg:p-0 lg:bg-transparent transition-all duration-500 ${
              offCanvas ? "right-0" : "-right-full"
            }`}
          >
            <ul className="flex flex-col space-y-5 lg:justify-end lg:space-x-10 lg:items-center lg:space-y-0 lg:flex-row">
              <button
                className="absolute top-14 right-14 lg:hidden"
                onClick={() => {
                  setOffCanvas(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
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
