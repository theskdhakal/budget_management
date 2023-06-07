import React from "react";
import { Header } from "./Header";
import { Container } from "react-bootstrap";
import { Footer } from "./Footer";

export const MainLayout = ({ children, backgroundURL }) => {
  return (
    <div>
      {/* header goes here  */}
      <Header />

      {/* main body goes here  */}
      <div className="main" style={{ background: backgroundURL }}>
        {children}
      </div>

      {/* footer goes here  */}
      <Footer />
    </div>
  );
};
