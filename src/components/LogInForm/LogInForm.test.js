import React from 'react'
import { shallow } from 'enzyme'
import '../../setupTests'
import LogInForm from './LogInForm'

describe('<LogInForm />', () => {
  it('renders without crashing', () => {
    shallow(<LogInForm />)
  })
})
