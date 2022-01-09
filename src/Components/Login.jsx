import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FireBase from "../FireBase";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { verification } from "../Redux/Action/Action";

const Login = () => {
  let data = useSelector(state => state.AuthReducer.emaildata);

  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [state, setState] = useState({
    email: "",
    password: "",
  });
  let { email, password } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      dispatch(verification(email, password));
      data === true ? window.location.assign("/home") : navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" container col-md-4 my-auto mb-5 mt-5 login">
      <div className="card mt-3" style={{ width: "30rem" }}>
        <div className="card-body cardImg">
          <img className="card-img-top" src="login.png.jpg" alt="Card img" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group ">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
