import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

describe('<Main />', () => {
  it('renders without crashing', () => {
    shallow(<Main />)
  })
})
