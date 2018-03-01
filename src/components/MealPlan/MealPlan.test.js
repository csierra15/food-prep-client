import React from 'react'
import { shallow } from 'enzyme'
import '../../setupTests'
import MealPlan from './MealPlan'

describe('<MealPlan />', () => {
  it('renders without crashing', () => {
    shallow(<MealPlan />)
  })
})
