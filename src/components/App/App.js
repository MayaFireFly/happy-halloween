import React, {useEffect, useState, useContext} from 'react';
import './App.css';
import Timer from '../Timer/Timer';
import Dashboard from '../Dashboard/Dashboard';
import Loading from '../Loading/Loading';
import axios from 'axios';
import {setTasks} from '../TasksContext';

const App = () => {  
  const [timeTD, setTimeTD] = useState('');
  let flag = false;
  const [content, setContent] = useState(<div className='wrapper' id='app'><Loading/></div>);  

  useEffect(
    ()=>{
      if(!flag){
        axios.get('http://sol-tst.herokuapp.com/api/v1/tasks/').
          then((response)=>{

            if(response.status === 200){
              setTasks(response.data.tasks);              
              setTimeTD(response.data.endsAt);              
              flag = true; 

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

  useEffect(
    ()=>{
      if(timeTD !== ''){
        setContent(<div className='wrapper' id='app'>    
          <div className='row row-timer'>
            <Timer timeTillDate={timeTD}/>
          </div>
          <div className='row'>
            <Dashboard flag={flag}/>
          </div>                      
        </div>);
      }      
    },
    [timeTD]
  );
  
  return <div>{content}</div>;
};  

export default App;