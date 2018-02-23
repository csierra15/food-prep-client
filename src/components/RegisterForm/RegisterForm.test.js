import React from 'react'
import { shallow, mount } from 'enzyme'
import '../../setupTests'
import RegisterForm from './RegisterForm'

describe('<RegisterForm />', () => {
  it('renders without crashing', () => {
    shallow(<RegisterForm />)
  })
})
