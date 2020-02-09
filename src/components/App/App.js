import React, {useEffect, useState} from 'react';
import './App.css';
import Timer from '../Timer/Timer';
import Dashboard from '../Dashboard/Dashboard';
import axios from 'axios';
import {setTasks} from '../TasksContext';

const App = () => {  
  const [timeTD, setTimeTD] = useState('');
  let flag = false;
  const [dash, setDash] = useState(<Dashboard flag={flag}/>);

  useEffect(
    ()=>{
      if(!flag){
        axios.get('http://sol-tst.herokuapp.com/api/v1/tasks/').
          then((response)=>{
            if(response.status === 200){
              setTasks(response.data.tasks);
              if(response.data.endsAt != timeTD){
                setTimeTD(response.data.endsAt);
              }
              flag = true;
              setDash(<Dashboard flag={flag}/>);
            }else{
              alert(response.status + ' ' + response.statusText);
            }
          }).
          catch((error)=>{
            alert(error);
          });
      }      
    },
    [flag]
  );
  
  return <div className='wrapper' id='app'>
    
    <div className='row row-timer'>
      <Timer timeTillDate={timeTD}/>
    </div>
    <div className='row'>
      {dash}
    </div> 
            
  </div>;
};  

export default App;