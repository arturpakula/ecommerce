import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignPage from './pages/sign-page/sign.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {

  constructor(props) {
    super();

    this.state = {
      curentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({curentUser: user});
    })
  }

  componentDidUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header curentUser={this.state.curentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign' component={SignPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
