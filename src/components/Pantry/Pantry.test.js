import React from 'react'
import { shallow, mount } from 'enzyme'
import '../../setupTests'
import Pantry from './Pantry'

describe('<Pantry />', () => {
  it('renders without crashing', () => {
    shallow(<Pantry />)
  })
})
