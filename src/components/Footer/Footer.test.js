import React from 'react'
import { shallow, mount } from 'enzyme'
import '../../setupTests'
import Footer from './Footer'

describe('<Footer />', () => {
  it('renders without crashing', () => {
    shallow(<Footer />)
  })
})
