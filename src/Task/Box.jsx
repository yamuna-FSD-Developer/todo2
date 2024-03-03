import { useState } from "react";

function Box({addTask}) 
{
const [taskName,setTaskName]=useState("");
const [text, setText] = useState("");
const changeInput = (e) => {
  if (e.target.name === "taskName") {
    setTaskName(e.target.value);
  } else if (e.target.name === "text") {
    setText(e.target.value);
  }
};
const handleAddTask = () => {
  if (taskName && text) {
    addTask({title: taskName, detail:text});
    setTaskName("");
    setText("");
  }
};
  return (
    <div className="container text-center mt-5">
    <div className="row">
      <div className="col-lg-5 col-md-4 col-sm-12 mt-2">
      <div className="input-group flex-nowrap">
  <input onChange={changeInput} value={taskName} name="taskName" type="text" className="form-control border border-warning-subtle" placeholder="Task Name" aria-describedby="addon-wrapping"/>
</div>
      </div>
      <div className="col-lg-5 col-md-4 col-sm-12 mt-2">
      <div className="input-group flex-nowrap">
  <input onChange={changeInput}  value={text} name="text" type="text"className="form-control border border-warning-subtle" placeholder="Task Description" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-12 mt-2">
      <button onClick={handleAddTask} type="button"className="btn btn-warning" >Add Task</button>
      </div>
    </div>
  </div>
  )
}

export default Box;