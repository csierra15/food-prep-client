import React from 'react'
import { shallow } from 'enzyme'
import '../../setupTests'
import Recipes from './Recipes'

describe('<Recipes />', () => {
  it('renders without crashing', () => {
    shallow(<Recipes />)
  })
})
