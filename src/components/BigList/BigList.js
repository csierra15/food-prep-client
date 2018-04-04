import React from 'react'
import { connect } from 'react-redux'
import './BigList.css'

let BigList = (props) => {
  return(
    <div>
      <h1>{props.list.title}</h1>
      <p>{props.list.content}</p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  list: state.user.currentSelectedList
})

export default connect(mapStateToProps)(BigList)
