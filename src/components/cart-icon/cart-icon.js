import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingCart } from '../../images/shopping-bag.svg';

 const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingCart className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
};

const mapStateToProps = createStructuredSelector ({
      itemCount: selectCartItemsCount
})


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
