import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { dropdowncart } from "../Redux/Action/Action";

import "./NavBar.css";
const NavBar = () => {
  let Dispatch = useDispatch();
  let [cart, setCart] = useState(false);
  let handlecart = a => {
    setCart(!cart);
    Dispatch(dropdowncart(a));
  };

  let cartproducts = useSelector(state => state.AuthReducer.cartvalue);

  return (
    <>
      <nav className="navSection">
        <div>
          <span className="city">City</span>
          <span className="foods">
            foods...<i className="fal fa-biking" style={{ color: "green" }}></i>
          </span>
        </div>
        <div>
          <ul>
            <li>
              <i className="fal fa-map-marker-alt"></i> my location
            </li>
            <li>
              <i
                className="fal fa-shopping-bag"
                onClick={() => handlecart(cart)}
              >
                <sup>
                  <span
                    className="badge badge-secondary"
                    style={{ fontSize: "15px", color: "#111" }}
                  >
                    {cartproducts}
                  </span>
                </sup>
              </i>
            </li>
            <li>
              <Link to="/sigin">Signin</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>profile</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
