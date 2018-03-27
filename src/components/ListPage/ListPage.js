import React from 'react'
import './ListPage.css'
import { connect } from 'react-redux'
import { editListItem, deleteListItem, addItem } from '../../actions'

const ListPage = (props) => {
  return (
    <div className="list-card">
      <h4>LISTS  - IDEAS - RECIPES...</h4>

      <div className="container">
        <ul>
          <h5>{props.listTitle}</h5>
          <ul>
            {props.listItems.map(list => {
              <li>
                {list.item}
                <span>
                  <button className="edit" onClick={(index) => editListItem(index) }>Edit</button>
                  <button className="delete" onClick={(index) => deleteListItem(index) }>Delete</button>
                </span>
              </li>
            })}
          </ul>

          <form>
            <input placeholder="new item" className="new-item" name="userInput"></input>
          </form>
        </ul>
      </div>

      <button>New List</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  listItems: state.user.lists
})

export default connect(mapStateToProps)(ListPage)
