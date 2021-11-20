import React, { useEffect, useState, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './components/hooks/use-http';


function App() {
  const [tasks, setTasks] = useState([]);



  const httpData = useHttp();

  const { isLoading, error, sendRequest: fetchTasks } = httpData;


  useEffect(() => {
    const transformTasks = (tasksObject) => {
      const loadedTasks = [];
      for (const taskKey in tasksObject) {
        loadedTasks.push({ id: taskKey, text: tasksObject[taskKey].text });
      };
      setTasks(loadedTasks);
    };
    fetchTasks({
      url: 'https://react-demo-d50c0-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
    }, transformTasks);
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
