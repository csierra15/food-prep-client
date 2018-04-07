import React from 'react'
import { shallow } from 'enzyme'
import '../../setupTests'
import AddMealPlan from './AddMealPlan'

describe('<AddMealPlan />', () => {
  it('renders without crashing', () => {
    shallow(<AddMealPlan />)
  })
})
