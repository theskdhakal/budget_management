import React from "react";
import { Header } from "./Header";
import { Container } from "react-bootstrap";
import { Footer } from "./Footer";

export const MainLayout = ({ children }) => {
  return (
    <div>
      {/* header goes here  */}
      <Header />

      {/* main body goes here  */}
      <Container className="main">{children}</Container>

      {/* footer goes here  */}
      <Footer />
    </div>
  );
};
