import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import Auth from './pages/auth/auth';
import Header from './components/header/header';
import {auth} from './firebase/firebase.utils';




class App extends Component  {
  constructor() {
    super()
  
    this.state = {
       currentUser: null
    }
  }

  //Auth(firebase)
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={Auth} />
        </Switch>
      </div>
  
  );
  }
}

export default App;
