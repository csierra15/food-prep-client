import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal'
import EditMealForm from '../EditMealForm/EditMealForm'
import { closeModal, updateMeal } from '../../actions'

class MealModal extends Component {

  submit = (values) => {
    console.log(values)
    this.props.dispatch(updateMeal(values))
  }
  render() {
    return (
      <ReactModal isOpen={this.props.isOpen} contentLabel="Edit Meal" ariaHideApp={false}>
      <button onClick={() => this.props.dispatch(closeModal())}>x</button>
      <EditMealForm onSubmit={this.submit} />
    </ReactModal>
    )
  }
}

const mapStateToProps = (state, props) => ({
  isOpen: state.user.isOpen
})

export default connect(mapStateToProps)(MealModal)
