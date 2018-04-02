import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './ListForm.css'

let ListForm = (props) => {
  const { handleSubmit, submitting, pristine, reset } = props
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="listTitle">Title</label>
          <div>
            <Field name="listTitle" component="input" type="text" id="listTitle" placeholder="Shopping List" />
          </div>
        </div>

        <div>
          <label htmlFor="listContent">Content</label>
          <div>
            <Field name="listContent" component="textarea" type="text" id="listContent" placeholder="Shopping List" />
          </div>
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  )
}

ListForm = reduxForm({
  form: 'list'
})(ListForm)

export default ListForm
