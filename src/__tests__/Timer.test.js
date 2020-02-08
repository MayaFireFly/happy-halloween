import React from 'react';
import ReactDOM from 'react-dom';
import Timer from '../components/Timer/Timer';

describe('Timer', () => {
  it('render Timer without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Timer/>, div);
  });       
});