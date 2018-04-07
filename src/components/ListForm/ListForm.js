import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import './ListForm.css'

let ListForm = (props) => {
  const { handleSubmit, submitting, pristine } = props
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <div>
            <Field name="title" component="input" type="text" id="listTitle" placeholder="Shopping List" />
          </div>
        </div>

        <button type="submit" disabled={pristine || submitting}>Save</button>
      </form>
    </div>
  )
}

ListForm = reduxForm({
  form: 'list'
})(ListForm)

export default connect()(ListForm)
