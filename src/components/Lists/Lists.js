import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Lists.css'

//component did mount: fetch list fetchListData
//make this component stateful
const Lists = (props) => {
  return (
    <div>
      {props.lists.map(() => {
        <div className="list-card">
          <h4>LISTS  - IDEAS - RECIPES...</h4>

          <div className="container">
            <h5>{props.listTitle}</h5>
          </div>

          <Link to="/add-list"><button>New List</button></Link>
        </div>
      })}
    </div>

  )
}

const mapStateToProps = (state) => ({
  listTitle: state.user.lists.title,
  lists: state.user.lists
})

export default connect(mapStateToProps)(Lists)
