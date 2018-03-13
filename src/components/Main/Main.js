import React, { Component } from 'react';
import './Main.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { logInUserSuccess } from '../../actions/authActions'
import { connect } from 'react-redux'
import NavBar from '../NavBar/NavBar'
import LandingPage from '../LandingPage/LandingPage'
import RegisterForm from '../RegisterForm/RegisterForm'
import Footer from '../Footer/Footer'
import Recipes from '../Recipes/Recipes'
import AddMealPlan from '../AddMealPlan/AddMealPlan'
import ShoppingList from '../ShoppingList/ShoppingList'
import NewRecipeForm from '../NewRecipeForm/NewRecipeForm'
import NewShoppingListForm from '../NewShoppingListForm/NewShoppingListForm'
import Pantry from '../Pantry/Pantry'
import Dashboard from '../Dashboard/Dashboard'
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
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/new-recipe" component={NewRecipeForm} />
          <Route exact path="/add-meal-plan" component={AddMealPlan} />
          <Route exact path="/pantry" component={Pantry} />
          <Route exact path="/shopping-list" component={ShoppingList} />
          <Route exact path="/new-shopping-list" component={NewShoppingListForm} />
          <Route exact path="/login" component={LogInForm} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(Main)
