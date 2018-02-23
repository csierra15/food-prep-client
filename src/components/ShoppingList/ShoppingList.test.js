import React from 'react'
import { shallow, mount } from 'enzyme'
import '../../setupTests'
import ShoppingList from './ShoppingList'

describe('<ShoppingList />', () => {
  it('renders without crashing', () => {
    shallow(<ShoppingList />)
  })
})
