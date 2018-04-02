import React, {Component} from 'react'
import './ListPage.css'
import { connect } from 'react-redux'
import { addList } from '../../actions'
import ListForm from '../ListForm/ListForm'

class ListPage extends Component {

  submit = values => {
    console.log('dispatching add list!', values)
    this.props.dispatch(addList(values))
  }

  render() {
    return (
      <ListForm onSubmit={this.submit} />
    )
  }
}

export default connect()(ListPage)
