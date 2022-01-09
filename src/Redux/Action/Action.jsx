import FireBase from "../../FireBase";
import { useNavigate } from "react-router-dom";

export let CreateUser = (email, password) => {
  return async dispatch => {
    let CREATEUSER = await FireBase.auth().createUserWithEmailAndPassword(
      email,
      password
    );
    CREATEUSER.user.sendEmailVerification();
    dispatch({
      type: "CREATE_USER",
      payload: CREATEUSER,
    });
  };
};

export let verification = (email, password) => {
  return async dispatch => {
    let USERDATA = await FireBase.auth().signInWithEmailAndPassword(
      email,
      password
    );

    dispatch({
      type: "VERIFICATION",
      payload: USERDATA,
      emaildata: USERDATA.user.emailVerified,
    });
  };
};

export let GoogleProvider = new FireBase.auth.GoogleAuthProvider();
export let FacebookProvider = new FireBase.auth.FacebookAuthProvider();
export let googleLogin = provider => {
  return async dispatch => {
    let DATA = await FireBase.auth().signInWithPopup(provider);

    dispatch({
      type: "GOOGLELOGIN",
      payload: DATA,
    });
  };
};

export let addProduct = (a, b, c) => {
  return async dispatch => {
    let PRODUCT = a;
    let add = b;
    let totalcart = c;
   

    dispatch({
      type: "ADDPRODUCT",
      payload: PRODUCT,
      val: add,
      carttotal: totalcart,
    });
  };
};
export let removeProduct = (a, b) => {
  return async dispatch => {
    let REMOVE = a;
    let cartremove = b;
    dispatch({
      type: "REMOVEPRODUCT",
      payload: REMOVE,
      cartval: cartremove,
    });
  };
};
export let dropdowncart = val => {
  return async dispatch => {
    let DROP = val;

    dispatch({
      type: "DROPDOWN",
      payload: DROP,
    });
  };
};
