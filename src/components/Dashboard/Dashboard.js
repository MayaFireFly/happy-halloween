import React, {useContext, useState, useEffect} from 'react';
import './Dashboard.css';
import TasksContext, {getTask} from '../TasksContext';
import PropTypes from 'prop-types';

const Dashboard = (props) => {
  const flag = props.flag;  
  const tasks = useContext(TasksContext);
  const [tasksLines, setTasksLines] = useState('');
  const types = {
    kings:{
      text:'Выйграть три игры, разложив всех королей',
      imgSrc:'img/task-kings.png'
    },
    time:{
      text:'Выйграть три игры, каждую менее чем за 3 минуты',
      imgSrc:'img/task-time.png'
    },
    tournaments:{
      text:'Выйграть пять турниров подряд',
      imgSrc:'img/task-tournaments.png'
    }
  };  

  const hide = () => {    
    const appWrapper = document.getElementById('app');
    appWrapper.style.display = 'none';
  };
  
  const setLines = (arrayTasks) => {
    const lines = [];
    let counterTasks = 0;

    while(arrayTasks.length > 0 && counterTasks < 3){
      const task = getTask();
      const prog = task.progress;
      const btn = prog >= 100 ? <button onClick={hide}>Поставить рубашку</button> : '';

      lines.push(<div className='task-wrapper' key={counterTasks + '_task'}>
        <div className='task-img'>
          <img src={types[task.type].imgSrc} alt='image of card'/>
        </div>
        <div className='task-text'>
          <p>{types[task.type].text}</p>
          <progress max='100' value={prog}></progress>
        </div>        
        <div className='task-btn'>
          {btn}
        </div>        
      </div>);

      counterTasks++;
    }

    setTasksLines(lines);
  };
  
  useEffect(
    ()=>{      
      setLines(tasks);
    },
    [flag]
  );

  return <div className='dash-wrapper'>{tasksLines}</div>;
};

Dashboard.propTypes = {
  flag:PropTypes.bool
};

export default Dashboard;