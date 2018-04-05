import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchListData, getListInfo } from '../../actions'
import './Lists.css'

class Lists extends Component {

  componentDidMount() {
    this.props.dispatch(fetchListData())
  }

  render() {
    return (
      <div>
        <h1>LISTS  - IDEAS - RECIPES...</h1>
        {this.props.lists.map((list) => {
          return (
            <div className="list-card col-2"
               key={list._id}
               onClick={() => {
                this.props.dispatch(getListInfo(list))
                window.location = '/view-list'
              }}>
              <div className="container">
                <h4 className="listTitle">{list.title}</h4>
                <ul>
                  <li>{list.content}</li>
                </ul>
              </div>
            </div>
          )
        })
      }
        <Link to="/add-list"><button id="new-list-btn">New List</button></Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  lists: state.user.lists
})

export default connect(mapStateToProps)(Lists)
