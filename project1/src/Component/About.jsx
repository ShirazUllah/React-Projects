import React from "react";
import "../index.css";
import img from "../Animated Pic/img3.png";
import CommonPage from "./CommonPage";

const About = () => {
  return (
    <>
      <CommonPage
        title="Welcome To About Page"
        name="Shiraz Ullah"
        para="  We are a team of talented developers specializing in
                    creating cutting-edge websites that cater to the unique
                    needs of our clients. Our expertise lies in blending design
                    aesthetics with robust functionality, ensuring every project
                    we undertake stands out in the digital landscape. With a
                    track record of delivering excellence, we are committed to
                    pushing the boundaries of web development."
        imgSrc={img}
        visit1="/contact"
        visit2="/"
        btn1="Contact Us"
        btn2="Back To Home"
      />
    </>
  );
};

export default About;
