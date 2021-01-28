import React from 'react';
import CustomerBotton from '../custom-button/custom-button';
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">

            <div className="cart-items"/>
            <CustomerBotton>GO TO CHECKOUT</CustomerBotton>
            
        </div>
    )
}

export default CartDropdown;
