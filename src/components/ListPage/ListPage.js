import React from 'react'
import './ListPage.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { editListItem, deleteListItem, addItem } from '../../actions'

const ListPage = (props) => {
  return (
    <div className="list-card">
      <h4>LISTS  - IDEAS - RECIPES...</h4>

      <div className="container">
        <h5>{props.listTitle}</h5>
      </div>

      <Link to="/add-list"><button>New List</button></Link>
    </div>
  )
}

const mapStateToProps = (state) => ({
  listItems: state.user.lists
})

export default connect(mapStateToProps)(ListPage)
