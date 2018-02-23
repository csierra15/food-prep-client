import React from 'react'
import { shallow, mount } from 'enzyme'
import '../../setupTests'
import NewShoppingListForm from './NewShoppingListForm'

describe('<NewShoppingListForm />', () => {
  it('renders without crashing', () => {
    shallow(<NewShoppingListForm />)
  })
})
