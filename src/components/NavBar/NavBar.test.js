import React from 'react'
import { shallow, mount } from 'enzyme'
import '../../setupTests'
import NavBar from './NavBar'

describe('<NavBar />', () => {
  it('renders without crashing', () => {
    shallow(<NavBar />)
  })
})
