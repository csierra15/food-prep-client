import React from 'react'
import { shallow, mount } from 'enzyme'
import '../../setupTests'
import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
  it('renders without crashing', () => {
    shallow(<Dashboard />)
  })
})
