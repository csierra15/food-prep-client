import React from 'react'
import { shallow, mount } from 'enzyme'
import '../../setupTests'
import Recipes from './Recipes'

describe('<Recipes />', () => {
  it('renders without crashing', () => {
    shallow(<Recipes />)
  })
})
