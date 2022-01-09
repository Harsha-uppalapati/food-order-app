import React, { useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import "./Signup.css";
import { CreateUser } from "../Redux/Action/Action";
import { useNavigate } from "react-router-dom";
import {
  googleLogin,
  GoogleProvider,
  FacebookProvider,
} from "../Redux/Action/Action";

const Siginup = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [state, setState] = useState({
    email: "",
    password: "",
  });
  let { email, password } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = e => {
    e.preventDefault();
    try {
      dispatch(CreateUser(email, password));
      toast.success("email verification sent to yor mail id");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  let googleDta = useSelector(state => state.AuthReducer.emaildata);

  let handleLogin = async provider => {
    try {
      dispatch(googleLogin(provider));

      googleDta === true ? window.location.assign("/home") : navigate("/sigin");
    } catch (error) {
      // toast.error(error.message);
    }
  };

  return (
    <>
      <div className="sigin">
        <div className=" container col-md-4 my-auto mb-5 login">
          <div className="card mt-3" style={{ width: "30rem" }}>
            <div className="card-body cardImg">
              <img
                className="card-img-top"
                src="login.png.jpg"
                alt="Card img"
              />
            </div>
            <button
              className="btn btn-outline-primary  mt-2 googlebutton "
              onClick={_ => handleLogin(GoogleProvider)}
            >
              Login In Winth Google
            </button>
            <form onSubmit={handleSubmit}>
              <div className="form-group ">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={email}
                  name="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Create Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  value={password}
                />
              </div>

              <button
                className="btn btn-primary mt-3"
                style={{ borderRadius: "500px" }}
                onSubmit={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Siginup;
