import React from 'react'
import { connect } from 'react-redux'
import './BigList.css'
import '../../stylesheets/float-grid.css'
import { deleteList, updateList } from '../../actions'

let BigList = (props) => {
  return(
    <div className="big-list-div">
      <h1 id="big-list-h1">{props.list.title}</h1>
      <ul>
        {props.list.content.map((content, index) => {
          return (
            <li className="big-list-li" key={index}>
              {content}
              <span
                id="big-list-span"
                onClick={(e) => {
                  e.preventDefault()
                  console.log('clicked the x', index)
                  // for (let i=0; i<=props.list.content.length; i++) {
                  //   if (i === listContent) {
                  //   props.list.content.splice(0, 1, i)
                  //   props.dispatch(updateList(props.list))
                  //   }
                  // }
                }}
                >x</span>
            </li>
          )
        })}
      </ul>
      <form onSubmit={(e) => {
        e.preventDefault()
        let newItem = e.target.newItem.value
        props.list.content.push(newItem)
        props.dispatch(updateList(props.list))
        newItem = ''
      }}>
        <input type="text"
           placeholder="add new item"
           name="newItem"
           id="new-list-item-input"></input>
      </form>
      <button
        className="delete-button"
        onClick={() => {
          props.dispatch(deleteList(props.list._id))
        }}
        >Delete List</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  list: state.user.currentSelectedList
})

export default connect(mapStateToProps)(BigList)
