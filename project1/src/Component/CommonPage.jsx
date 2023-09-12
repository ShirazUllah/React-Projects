import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

const CommonPage = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-content-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 col-sm-10 pt-sm-0 m-0 d-flex align-content-center flex-column">
                  <h1>
                    {props.title}
                    <strong className="brand-name">
                      <br />
                      {props.name}
                    </strong>
                  </h1>
                  <p className="my-3">{props.para}</p>
                  <div className="mt-4">
                    <NavLink to={props.visit1} className="btn-get-started me-3">
                      {props.btn1}
                    </NavLink>
                    <NavLink to={props.visit2} className="btn-get-started me-3">
                      {props.btn2}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 col-xl-6  order-1 order-lg-2 header-img">
                  <img
                    src={props.imgSrc}
                    alt="CommonPage img"
                    className="img-fluid animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonPage;
