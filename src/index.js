import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import TasksContext, {Tasks} from './components/TasksContext';

ReactDOM.render(
  <TasksContext.Provider value={Tasks}>
    <App/>
  </TasksContext.Provider>, 
  document.getElementById('root')
);

//module.hot.accept();		//development mode only