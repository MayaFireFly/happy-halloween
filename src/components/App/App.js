import React, {useContext} from 'react';
import './App.css';
import Timer from '../Timer/Timer';
import Dashboard from '../Dashboard/Dashboard';
import axios from 'axios';
import TasksContext from '../TasksContext';

const App = () => {
  const tasks = useContext(TasksContext);
  
  return <div className='wrapper'>
    <div className='row'>
      <Timer timeTillDate='2020-04-27T17:24:40.685945'/>
    </div>
    <div className='row'>
      <Dashboard/>
    </div>      
  </div>;
};  

export default App;