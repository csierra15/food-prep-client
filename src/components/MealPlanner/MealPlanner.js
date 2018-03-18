import React from 'react'
import { connect } from 'react-redux'
import './MealPlanner.css'

const MealPlanner = (props) => {
  return (
    // instead of individual inputs,
    // create a button that renders form
    // for creating new meal made of single input

    // <div className="Rtable Rtable--6cols">
    //
    //   <div className="Rtable-cell" id="morning_header"><h3>Morning</h3></div>
    //     <div className="Rtable-cell" id="morning_1"><input type="text" name="userInput" placeholder="add item"
    //       onKeyUp={e => {
    //         if (e.keyCode === 13) {
    //           e.preventDefault()
    //           let meal = e.target.userInput.value
    //           //addMeal(meal)
    //           console.log(meal)
    //           e.target.morning_1_input.value = ''
    //       }
    //     }}></input></div>
    //     <div className="Rtable-cell" id="morning_2"><input type="text" placeholder="add item" onKeyUp={e => {
    //       if (e.keyCode === 13) {
    //         e.preventDefault()
    //         console.log('text changed')
    //       }
    //     }}></input></div>
    //     <div className="Rtable-cell" id="morning_3"><input type="text" placeholder="add item" onKeyUp={e => {
    //       if (e.keyCode === 13) {
    //         e.preventDefault()
    //         console.log('text changed')
    //       }
    //     }}></input></div>
    //     <div className="Rtable-cell" id="morning_4"><input type="text" placeholder="add item" onKeyUp={e => {
    //       if (e.keyCode === 13) {
    //         e.preventDefault()
    //         console.log('text changed')
    //       }
    //     }}></input></div>
    //     <div className="Rtable-cell" id="morning_5"><input type="text" placeholder="add item" onKeyUp={e => {
    //       if (e.keyCode === 13) {
    //         e.preventDefault()
    //         console.log('text changed')
    //       }
    //     }}></input></div>
    //
    //     <div className="Rtable-cell" id="afternoon_header"><h3>Afternoon</h3></div>
    //     <div className="Rtable-cell" id="afternoon_1"><input type="text" placeholder="add item" onKeyUp={e => {
    //       if (e.keyCode === 13) {
    //         e.preventDefault()
    //         console.log('text changed')
    //       }
    //     }}></input></div>
    //     <div className="Rtable-cell" id="afternoon_2"><input type="text" placeholder="add item" onKeyUp={e => {
    //       if (e.keyCode === 13) {
    //         e.preventDefault()
    //         console.log('text changed')
    //       }
    //     }}></input></div>
    //     <div className="Rtable-cell" id="afternoon_3"><input type="text" placeholder="add item" onKeyUp={e => {
    //       if (e.keyCode === 13) {
    //         e.preventDefault()
    //         console.log('text changed')
    //       }
    //     }}></input></div>
    //     <div className="Rtable-cell" id="afternoon_4"><input type="text" placeholder="add item" onKeyUp={e => {
    //       if (e.keyCode === 13) {
    //         e.preventDefault()
    //         console.log('text changed')
    //       }
    //     }}></input></div>
    //     <div className="Rtable-cell" id="afternoon_5"><input type="text" placeholder="add item" onKeyUp={e => {
    //       if (e.keyCode === 13) {
    //         e.preventDefault()
    //         console.log('text changed')
    //       }
    //     }}></input></div>
    //
    //     <div className="Rtable-cell" id="evening_header"><h3>Evening</h3></div>
    //     <div className="Rtable-cell" id="evening_1"><input type="text" placeholder="add item" onKeyUp={e => {
    //       if (e.keyCode === 13) {
    //         e.preventDefault()
    //         console.log('text changed')
    //       }
    //     }}></input></div>
    //     <div className="Rtable-cell" id="evening_2"><input type="text" placeholder="add item" onKeyUp={e => {
    //       if (e.keyCode === 13) {
    //         e.preventDefault()
    //         console.log('text changed')
    //       }
    //     }}></input></div>
    //     <div className="Rtable-cell" id="evening_3"><input type="text" placeholder="add item" onKeyUp={e => {
    //       if (e.keyCode === 13) {
    //         e.preventDefault()
    //         console.log('text changed')
    //       }
    //     }}></input></div>
    //     <div className="Rtable-cell" id="evening_4"><input type="text" placeholder="add item" onKeyUp={e => {
    //       if (e.keyCode === 13) {
    //         e.preventDefault()
    //         console.log('text changed')
    //       }
    //     }}></input></div>
    //     <div className="Rtable-cell" id="evening_5"><input type="text" placeholder="add item" onKeyUp={e => {
    //       if (e.keyCode === 13) {
    //         e.preventDefault()
    //         console.log('text changed')
    //       }
    //     }}></input></div>
    // </div>
  )
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(null, mapDispatchToProps)(MealPlanner)
