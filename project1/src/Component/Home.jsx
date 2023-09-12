import React from "react";
import "../index.css";
import img from "../Animated Pic/img.png";
import CommonPage from "./CommonPage";

const Home = () => {
  return (
    <>
      <CommonPage
        title="I'm Web Developer"
        name="Shiraz Ullah"
        para=" Welcome to a realm where creativity meets functionality. As
                    passionate web developers, we craft digital experiences that
                    not only dazzle the eyes but also facilitate seamless user
                    journeys. Let us turn your vision into a web reality that
                    speaks volumes"
        imgSrc={img}
        visit1="/service"
        visit2="/"
        btn1="Leran More"
        btn2="Hire Me"
      />
    </>
  );
};

export default Home;
