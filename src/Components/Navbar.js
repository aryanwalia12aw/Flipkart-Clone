import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <div style={{ position: "relative" }}>
              <img style={{width : "120" , height : "22"}} src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg" />

              <div style={{ position: "absolute" ,top: "70%" ,left : "5%" }} className="mx-5">
                <span
                  className="G90_N3 mx-1"
                  style={{
                    fontSize: "12px",
                    fontFamily:
                      "inter_regular,fallback-inter_regular,Arial,sans-serif",
                  }}
                >
                  <i>Explore</i>
                </span>
                <span
                  className="_1NZ9Rr "
                  style={{
                    fontSize: "12px",
                    fontFamily:
                      "inter_regular,fallback-inter_regular,Arial,sans-serif",
                    color: "#ffc200",
                  }}
                >
                  <i>Plus</i>
                </span>
                <img
                  className="_2IlWoL mx-1"
                  width="10"
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg"
                  height="10"
                  alt="Plus Brand"
                />
              </div>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <form className="d-flex  " role="search">
            <button className="d-flex justify-content-center" style={{backgroundColor : "#f0f5ff" , color : "#717478"}}>
              <img
                className="Search"
                style={{ width: "24px", height: "24px", color: "#717478" }}
                src="https://static.thenounproject.com/png/875351-200.png"
              ></img>
            </button>
            <input
              className="form-control me-5  "
              type="Search"
              placeholder="Search for Products, Brands and More"
              aria-label="Search"
              style={{
                width: "560px",
                height: "40px",
                backgroundColor: "#f0f5ff",
                fontSize: "17px",
              }}
            ></input>
          </form>
          <div className=" d-flex justify-content-right">
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a
                    className="nav-link active mx-1  my-2"
                    aria-current="page"
                    href="#"
                  >
                    <img
                      src=" https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
                      style={{
                        height: 24,
                        width: 24,
                        fontFamily:
                          "inter_regular,fallback-inter_regular,Arial,sans-serif",
                      }}
                    />
                    <span
                      className="mx-2"
                      style={{
                        height: 24,
                        width: 24,
                        fontFamily:
                          "inter_regular,fallback-inter_regular,Arial,sans-serif",
                      }}
                    >
                      Become a Seller
                    </span>
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                  data-bs-toggle="dropdown"
                    className="nav-link dropdown-toggle mx-1 my-2"
                    to="/Signin"
                    role="button"
                    aria-expanded="false"
               
                    >
                      <Link to="Signin" >
                    {<img
                      src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8ULZulMIVeWZ3LgmQdmRvWcOvSucm0nZGA&usqp=CAU"
                      style={{ height: 24, width: 24 }}
                    />}
                          </Link>
                    <span
                      className="mx-2"
                      style={{
                        height: 24,
                        width: 24,
                        fontFamily:
                          "inter_regular,fallback-inter_regular,Arial,sans-serif",
                      }}
                    >
                      Sign in
                    </span>
                  </a>
                  <ul className="dropdown-menu" 
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item mx-1 my-2">
                  <a className="nav-link" href="#">
                    <img
                      src=" https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                      style={{ height: 24, width: 24 }}
                    />{" "}
                    <span
                      className="mx-2"
                      style={{
                        height: 24,
                        width: 24,
                        fontFamily:
                          "inter_regular,fallback-inter_regular,Arial,sans-serif",
                      }}
                    >
                      Cart
                    </span>
                  </a>
                </li>
                <div className="dropdown mx-1 my-2">
                  <button
                    className="btn  dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b
                      className="mx-2"
                      style={{
                        height: 24,
                        width: 24,
                        fontFamily:
                          "inter_regular,fallback-inter_regular,Arial,sans-serif",
                      }}
                    >
                      :
                    </b>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
