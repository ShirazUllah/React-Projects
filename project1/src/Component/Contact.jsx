import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    Email: "",
    msg: "",
  });

  //
  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  //
  const fomSubmit = (e) => {
    e.preventDefault();
    return alert(
      `My name is ${data.name}, my mobile number is ${data.phone}, my email is ${data.Email} abd my message is ${data.msg} `
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container container_div">
        <div className="row">
          <div className="col-md-6 cl-10 mx-auto">
            <form onSubmit={fomSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  value={data.name}
                  onChange={inputEvent}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter mobile number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="Email"
                  value={data.Email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
              </div>
              <div className="col-12 m-3">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
            <div className="btn-container">
              <div className="row gy-3 text-center m-2 p-5 d-flex justify-content-center">
                <div className="col-lg-10">
                  <NavLink to="/" className=" btn-get-started  me-3">
                    Back To Home
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
