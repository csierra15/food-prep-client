import React from 'react'
import { shallow, mount } from 'enzyme'
import '../../setupTests'
import LandingPage from './LandingPage'

describe('<LandingPage />', () => {
  it('renders without crashing', () => {
    shallow(<LandingPage />)
  })
})
