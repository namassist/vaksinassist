import React from "react";

const Container = ({ children, myClass }) => {
  return <div className={`container ${myClass}`}>{children}</div>;
};

export default Container;
