import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import CustomerBotton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.styles.scss";

//NOTE: when using connect and only passing in the 'mapStateToProps' arg, the connect feature will actually
//automatically pass in the dispatch function to the component
//this is useful if you only have ONE dispatch action that needs to be used, like in this component!

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? ( //if cartItems is not zero(zero is falsy) => meaning there are items in the cart then render those items
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          //otherwise show this message
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomerBotton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomerBotton>
    </div>
  );
};

const mapStateToProps = state => ({
  //not a short cut => kept orginal to show how its done without using createStructuredSelector
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
