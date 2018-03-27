import React, { Component } from 'react';
import './Main.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { logInUserSuccess } from '../../actions/authActions'
import { connect } from 'react-redux'
import NavBar from '../NavBar/NavBar'
import LandingPage from '../LandingPage/LandingPage'
import RegisterForm from '../RegisterForm/RegisterForm'
import Footer from '../Footer/Footer'
import ListPage from '../ListPage/ListPage'
import ListForm from '../ListForm/ListForm'
import Dashboard from '../Dashboard/Dashboard'
import MealPage from '../MealPage/MealPage'
import LogInForm from '../LogInForm/LogInForm'

class Main extends Component {

  componentDidMount() {
    const authToken = localStorage.getItem('token')
    if (authToken) {
      this.props.dispatch(logInUserSuccess(authToken))
    }
  }

  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/add-meal" component={MealPage} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/lists" component={ListPage} />
          <Route exact path="/new-list" component={ListForm} />
          <Route exact path="/login" component={LogInForm} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(Main)
