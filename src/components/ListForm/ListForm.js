import React from 'react'
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
        <div>
          <label htmlFor="content">Content</label>
          <div>
            <Field name="content" component="textarea" rows="4" cols="50" type="text" id="listContent" placeholder="Shopping List" />
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

export default ListForm
