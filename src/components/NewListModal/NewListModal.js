'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal'
import { closeModal, addList } from '../../actions'
import ListForm from '../ListForm/ListForm'

class NewListModal extends Component {

  submit = (values) => {
    this.props.dispatch(addList(values))
    this.props.dispatch(closeModal())
  }

  render() {
    return (
      <ReactModal isOpen={this.props.isOpen} contentLabel="Edit Meal" ariaHideApp={false}>
        <button onClick={() => this.props.dispatch(closeModal())}>x</button>
        <ListForm onSubmit={this.submit} />
      </ReactModal>
    )
  }
}

const mapStateToProps = (state, props) => ({
  isOpen: state.user.isOpen
})

export default connect(mapStateToProps)(NewListModal)
