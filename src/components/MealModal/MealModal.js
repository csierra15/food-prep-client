import React from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal'

const MealModal = (props) => {
  return (
    <ReactModal isOpen={props.isOpen} contentLabel="Edit Meal" ariaHideApp={false}>
    <button>x</button>
    {/* edit meal form */}
  </ReactModal>
  )
}

const mapStateToProps = (state, props) => ({
  isOpen: state.user.isOpen
})

export default connect(mapStateToProps)(MealModal)
