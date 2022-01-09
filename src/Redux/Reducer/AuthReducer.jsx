import { verification } from "../Action/Action";

let initialState = {
  createuser: [],
  userdata: [],
  googlelogin: [],
  totalproductvalue: [0],
  cartvalue: [0],
  drop: [false],
  emaildata: [false],
  carttotal: [],
};
export let AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        createuser: action.payload,
      };
    case "VERIFICATION":
      return {
        ...state,
        userdata: action.payload,
        emaildata: action.emaildata,
      };
    case "GOOGLELOGIN":
      return {
        ...state,
        googlelogin: action.payload,
      };
    case "ADDPRODUCT":
      return {
        ...state,
        totalproductvalue:
          parseInt(action.payload) + parseInt(state.totalproductvalue),
        cartvalue: parseInt(action.val) + parseInt(state.cartvalue),
      };
    case "REMOVEPRODUCT":
      return {
        ...state,
        totalproductvalue:
          parseInt(state.totalproductvalue) - parseInt(action.payload),
        cartvalue: parseInt(state.cartvalue) - parseInt(action.cartval),
        carttotal: action.carttotal,
      
      };
    case "DROPDOWN":
      return {
        ...state,
        drop: action.payload,
      };

    default:
      return state;
  }
};
