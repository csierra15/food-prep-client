import React from 'react'
import { connect } from 'react-redux'
import './BigList.css'
import '../../stylesheets/float-grid.css'
import { deleteList, updateList, deleteContentItem, addContentItem } from '../../actions'

let BigList = (props) => {
  return(
    <div className="big-list-div">
      <h1 id="big-list-h1">{props.list.title}</h1>
      <ul>
        {props.list.content.map((content, index) => {
          return (
            <li className="big-list-li" key={index}>
              {content}
              <button className="delete-button" id="list-item-delete"
                onClick={(e) => {
                  e.preventDefault()
                  for (let i=0; i<=props.list.content.length; i++) {
                    if (i === index) {
                      props.dispatch(deleteContentItem(index))
                      props.dispatch(updateList(props.list))
                    }
                  }
                  console.log('clicked the x', props.list.content)
                }}
                >x</button>
            </li>
          )
        })}
      </ul>
      <form onSubmit={(e) => {
        e.preventDefault()
        let newItem = e.target.newItem.value
        //instead of putting into state,
        const newContent = [...props.list.content, newItem]
        console.log(props.list);
        props.dispatch(addContentItem(newItem))
        props.dispatch(updateList(newContent))
        e.target.newItem.value = ''
      }}>
        <input type="text"
           placeholder="add new item"
           name="newItem"
           id="new-list-item-input">
        </input>
        <button type="submit" id="add-item-btn">Add Item</button>
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
