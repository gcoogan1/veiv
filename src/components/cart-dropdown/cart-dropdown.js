import React from "react";
import { connect } from "react-redux";
import CustomerBotton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomerBotton>GO TO CHECKOUT</CustomerBotton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);
