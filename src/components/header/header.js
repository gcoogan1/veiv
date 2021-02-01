import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { ReactComponent as Logo } from '../../images/crown.svg'
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';

//TODO: CHANGE LOGO

const Header = ({currentUser, hidden}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/shop">Contact</Link>
                {currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>Sign Out</div>  :
                    <Link className="option" to="/signin">Sign In</Link>
                }
                <CartIcon />    
            </div>
            {hidden ? null :  <CartDropdown /> }
           
        </div>
    )
}

const mapStateToProps = createStructuredSelector({          //createStructuredSelector is a short cut
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });

export default connect(mapStateToProps)(Header);
