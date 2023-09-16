import { Component } from "react";
import Header from "../Header/Header";
import "./Cart.css";

class Cart extends Component {
  state = { mycart: [] };

  render() {
    return (
      <div className="Cart">
        <Header />
        <h1>IN progress(Cart)</h1>
      </div>
    );
  }
}

export default Cart;
