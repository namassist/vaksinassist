import React from "react";
import Container from "../layout/Container";

import Logo from "../../assets/img/footer.svg";

const Footer = () => {
  return (
    <footer className="w-full h-32 py-5 border-t-2 bg-fourth-color border-gray-200  items-center flex text-sm text-primary">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-4/12">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="w-6/12 flex justify-end tracking-wide font-semibold">
            &copy; Copyright 2021 | Built by&nbsp;
            <a
              className="animate-pulse transform hover:scale-105 hover:text-sixth transition-all duration-150 "
              href="https://github.com/namassist"
            >
              namassist
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
