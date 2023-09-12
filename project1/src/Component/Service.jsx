import React from "react";
import "../index.css";
import Cards from "./Cards";
import Sdata from "./Sdata";
import { NavLink } from "react-router-dom";

const Service = () => {
  return (
    <>
      <div className="my-4">
        <h1 className="text-center brand-name"> Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {Sdata.map((val, ind) => {
                return (
                  <Cards
                    key={ind}
                    imgSrc={val.imgSrc}
                    title={val.title}
                    para={val.para}
                  />
                );
              })}
            </div>
          </div>
          <div className="btn-container">
            <div className="row gy-3 text-center m-2 p-5 d-flex justify-content-center">
              <div className="col-lg-10">
                <NavLink to="/about" className="btn-get-started  me-3">
                  About
                </NavLink>
                <NavLink to="/" className=" btn-get-started  me-3">
                  Back To Home
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
