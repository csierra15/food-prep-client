import React from 'react'
import 'react-dates/initialize';
import './Dashboard.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';

const Dashboard = () => {
  return (
    <div className="dashboard-content">

      <DateRangePicker />

      <header role="banner">
        <h1>Hello User!</h1>
        <h2>Here's this week's plan</h2>
      </header>

      <section id="meal-plan-data">
        <div className="Rtable Rtable--6cols">

            <div className="Rtable-cell"><h3>Morning</h3></div>
            <div className="Rtable-cell"><input type="text" placeholder="add item" onInput={console.log('text changed')}></input></div>
            <div className="Rtable-cell"><input type="text" placeholder="add item" onSubmit={console.log('text changed')}></input></div>
            <div className="Rtable-cell"><input type="text" placeholder="add item" onSubmit={console.log('text changed')}></input></div>
            <div className="Rtable-cell"><input type="text" placeholder="add item" onSubmit={console.log('text changed')}></input></div>
            <div className="Rtable-cell"><input type="text" placeholder="add item" onSubmit={console.log('text changed')}></input></div>

            <div className="Rtable-cell"><h3>Afternoon</h3></div>
            <div className="Rtable-cell"><input type="text" placeholder="add item" onSubmit={console.log('text changed')}></input></div>
            <div className="Rtable-cell"><input type="text" placeholder="add item" onSubmit={console.log('text changed')}></input></div>
            <div className="Rtable-cell"><input type="text" placeholder="add item" onSubmit={console.log('text changed')}></input></div>
            <div className="Rtable-cell"><input type="text" placeholder="add item" onSubmit={console.log('text changed')}></input></div>
            <div className="Rtable-cell"><input type="text" placeholder="add item" onSubmit={console.log('text changed')}></input></div>

            <div className="Rtable-cell"><h3>Evening</h3></div>
            <div className="Rtable-cell"><input type="text" placeholder="add item" onSubmit={console.log('text changed')}></input></div>
            <div className="Rtable-cell"><input type="text" placeholder="add item" onSubmit={console.log('text changed')}></input></div>
            <div className="Rtable-cell"><input type="text" placeholder="add item" onSubmit={console.log('text changed')}></input></div>
            <div className="Rtable-cell"><input type="text" placeholder="add item" onSubmit={console.log('text changed')}></input></div>
            <div className="Rtable-cell"><input type="text" placeholder="add item" onSubmit={console.log('text changed')}></input></div>

        </div>
        <button>edit</button>
        <button>delete</button>
        <Link to="/add-meal-plan">
          <button>new meal</button>
        </Link>
      </section>
    </div>
  )
}

export default connect()(Dashboard)
