import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import RegisterForm from './components/RegisterForm/RegisterForm'
import Footer from './components/Footer/Footer'
import Recipes from './components/Recipes/Recipes'
import MealPlan from './components/MealPlan/MealPlan'
import ShoppingList from './components/ShoppingList/ShoppingList'
import NewRecipeForm from './components/NewRecipeForm/NewRecipeForm'
import NewShoppingListForm from './components/NewShoppingListForm/NewShoppingListForm'
import Pantry from './components/Pantry/Pantry'
import Dashboard from './components/Dashboard/Dashboard'

class App extends Component {
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
          <Route exact path="/meal-plan" component={MealPlan} />
          <Route exact path="/pantry" component={Pantry} />
          <Route exact path="/shopping-list" component={ShoppingList} />
          <Route exact path="/new-shopping-list" component={NewShoppingListForm} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
