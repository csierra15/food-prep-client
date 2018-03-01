import React from 'react'
import { shallow } from 'enzyme'
import '../../setupTests'
import ShoppingList from './ShoppingList'

describe('<ShoppingList />', () => {
  it('renders without crashing', () => {
    shallow(<ShoppingList />)
  })
})
