import React from "react";
// import Container from "./Container";

const Layout = ({ children }) => {
  return (
    <div className="bg-fourth-color font-poppins space-y-10">
      {/* <Container>{children}</Container> */}
      {children}
    </div>
  );
};

export default Layout;
