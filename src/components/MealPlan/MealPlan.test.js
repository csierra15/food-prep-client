import React from 'react'
import { shallow, mount } from 'enzyme'
import '../../setupTests'
import MealPlan from './MealPlan'

describe('<MealPlan />', () => {
  it('renders without crashing', () => {
    shallow(<MealPlan />)
  })
})
