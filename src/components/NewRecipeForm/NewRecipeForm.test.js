import React from 'react'
import { shallow, mount } from 'enzyme'
import '../../setupTests'
import NewRecipeForm from './NewRecipeForm'

describe('<NewRecipeForm />', () => {
  it('renders without crashing', () => {
    shallow(<NewRecipeForm />)
  })
})
