import React from 'react';

const Tasks = [];

const setTasks = (arrayTaskObjects) => {
  if(typeof arrayTaskObjects != 'undefined' 
  && arrayTaskObjects != null 
  && arrayTaskObjects.length != null 
  && arrayTaskObjects.length > 0){

    for(let task_id = 0; task_id < arrayTaskObjects.length; task_id++){

      Tasks.push(arrayTaskObjects[task_id]);     
    }
  }
};

const getTask = () => {
  if(Tasks.length > 0){
    return Tasks.shift();
  }
};

const clearTasks = () => {
  while(Tasks.length !== 0){
    Tasks.pop();
  }
};

const TasksContext = React.createContext(Tasks);

export default TasksContext;
export {setTasks};
export {getTask};
export {clearTasks};
export {Tasks};