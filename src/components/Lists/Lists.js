import React, {Component} from 'react'
import { connect } from 'react-redux'
import Linkify from 'react-linkify'
import { fetchListData, getListInfo, triggerListModal } from '../../actions'
import './Lists.css'
import '../../stylesheets/float-grid.css'
import NewListModal from '../NewListModal/NewListModal'

class Lists extends Component {

  componentDidMount() {
    this.props.dispatch(fetchListData())
  }

  render() {
    console.log(this.props.lists);
    return (
      <Linkify>
        <div>
          <h1 id="lists-h1">LISTS  - IDEAS - RECIPES...</h1>
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
                    {list.content.map(content => (
                      <li key={Math.random()}>{content}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })
          }
          <button id="new-list-btn"
            onClick={(e) => {
              e.preventDefault()
              this.props.dispatch(triggerListModal())
            }}
            >New List</button>
            <NewListModal />
        </div>
      </Linkify>
    )
  }
}

const mapStateToProps = (state) => ({
  lists: state.user.lists
})

export default connect(mapStateToProps)(Lists)
