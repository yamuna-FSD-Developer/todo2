import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from'./Task/Head.jsx';
import Box from'./Task/Box.jsx';
import Status from'./Task/Status.jsx';
import Card from'./Task/Card.jsx';
import {useState} from 'react';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap.min';



function App() {
 
  const [taskList,setTaskList]=useState([]);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [editTask, setEditTask] = useState(null);


  const filterTasks = () => {
    if (selectedStatus === 'All') {
      return taskList;
    } else {
      return taskList.filter((task) => task.status === selectedStatus);
    }
  };
  console.log('Rendering App component:', selectedStatus, taskList);


const addTask = (newTask) => {
  const updatedTaskList = [...taskList, { ...newTask, status:'Not Completed' }];
  setTaskList(updatedTaskList);
  
};
   
   const deleteTask = (taskTitle) => {
    const updatedTaskList = taskList.filter((task) => task.title !== taskTitle);
    setTaskList(updatedTaskList);
    
  };
  const editTaskDetails = (taskTitle, taskDetail) => {
    setEditTask({ title: taskTitle, detail: taskDetail });
  };


  return (
    <>
   <Head/>
   <Box addTask={addTask}/>
   <Status selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus}/>
   <div className="container mt-3">
  <div className="row">
  {filterTasks().map((data) => (
            <Card
              title={data.title}
              detail={data.detail}
              key={data.index}
              onDelete={deleteTask}
              onEdit={editTaskDetails}
              status={data.status}
              taskList={taskList}
              setTaskList={setTaskList}

            />
          ))}

   </div>
   </div>

   </>
  );

}
export default App;








