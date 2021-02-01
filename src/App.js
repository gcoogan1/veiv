import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import Auth from "./pages/auth/auth";
import Header from "./components/header/header";
import Checkout from './pages/checkout/checkout';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';

class App extends Component {
  

  //Auth(firebase)
  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }
          );
        });

      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <Auth />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({ //short-cut (originl example on cart-dropdown)
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
