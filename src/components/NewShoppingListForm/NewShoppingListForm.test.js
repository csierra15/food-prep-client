import React from 'react'
import { shallow } from 'enzyme'
import '../../setupTests'
import NewShoppingListForm from './NewShoppingListForm'

describe('<NewShoppingListForm />', () => {
  it('renders without crashing', () => {
    shallow(<NewShoppingListForm />)
  })
})
