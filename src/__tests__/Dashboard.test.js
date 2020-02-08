import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../components/Dashboard/Dashboard';

describe('Dashboard', () => {
  it('render Dashboard without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard/>, div);
  });       
});