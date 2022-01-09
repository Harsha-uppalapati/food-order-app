import React, { Fragment, useState, useMemo } from "react";
import JSON from "../Json/items.json";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../Redux/Action/Action";
import { removeProduct } from "./../Redux/Action/Action";
const Home = () => {
  let carttotal = useSelector(state => state.AuthReducer.totalproductvalue);
  let cartproducts = useSelector(state => state.AuthReducer.cartvalue);
  let { food } = JSON;
  let Dispatch = useDispatch();
  let drop = useSelector(state => state.AuthReducer.drop);
  let [totalCart, setTotalCart] = useState([]);

  // let cartVal = food.filter(e => {
  //   if (e.id === totalCart.id) {
  //     return e;
  //   }
  // });
  console.log(totalCart);
  let sent = (a, b) => {
    Dispatch(addProduct(a, 1));

    setTotalCart([...totalCart, b]);
  };
  let remove = a => {
    Dispatch(removeProduct(a, 1));
  };
  return (
    <>
      <div
        className="cartData"
        style={drop ? { display: "none" } : { display: "block" }}
      >
        <table style={{ background: "#fff" }}>
          <tr>
            <th>items</th>
            <th>price</th>
          </tr>
          {totalCart.map(e => (
            <>
              <tr>
                <th>
                  <img
                    src={e.image}
                    alt=""
                    style={{ width: "10px", height: "10px" }}
                  />
                </th>
                <th>{e.price}</th>
                <th>
                  <button>-</button>
                  <button>+</button>
                </th>
              </tr>
              <tr>
                <th></th>
                <th>{/* <button>proceed to checkout</button> */}</th>
              </tr>
            </>
          ))}
          <th>total</th>
          <th>{carttotal}</th>
        </table>

        {/* <table>
          <tr>
            <th>items</th>
            <th>total</th>
          </tr>
          <tr>
            <th>{cartproducts}</th>
            <th>{carttotal}</th>
          </tr>
          <tr>
            <th></th>
            <th>
              <button>proceed to checkout</button>
            </th>
          </tr>
        </table> */}
      </div>
      <div className="d-flex cardcontainer items">
        {food.map((e, i) => (
          <Fragment key={i.toString()}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={e.image} className="card-img-top" alt={e.name} />
              <div className="card-body">
                <h5 className="card-title">{e.name}</h5>
                <p className="card-text">₹{e.price}</p>
{/* 
                {cartproducts > 0 ? (
                  <button
                    onClick={() => remove(e.price)}
                    className="btn btn-dark"
                  >
                    -
                  </button>
                ) : (
                  ""
                )} */}
                <button
                  className="btn btn-outline-dark"
                  onClick={() => sent(e.price, e)}
                >
                  Add to Cart
                </button>
                {/* <button
                  onClick={() => sent(e.price, e)}
                  className="btn btn-outline-dark"
                >
                  +
                </button> */}
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Home;
