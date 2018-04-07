import React from 'react'
import { shallow } from 'enzyme'
import '../../setupTests'
import NavBar from './NavBar'

describe('<NavBar />', () => {
  it('renders without crashing', () => {
    shallow(<NavBar />)
  })
})
