import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Main from './Main'

describe('<Main />', () => {
  it('renders without crashing', () => {
    shallow(<Main />)
  })
})
