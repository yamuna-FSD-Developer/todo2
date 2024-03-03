import { useState,useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

function Card({ title, detail,onDelete,status,taskList,setTaskList,onEdit}) {
  
  const [select,setSelect]=useState(status);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDetail, setEditDetail] = useState(detail);

  useEffect(() => {
    setSelect(status);
  }, [status]);

  const deleteButton = () => {
    onDelete(title);
  };
 
 
    const handleStatusChange = (newStatus) => {
      setSelect(newStatus);

      updateStatusInList(title, newStatus);
    };

    const handleEditClick = () => {
      setIsEditing(true);
      onEdit(title, detail);
    };
  
    const handleUpdateClick = () => {
      setIsEditing(false);
      updateTaskInList(title, editTitle, editDetail, select);
    };


    const updateStatusInList = (taskTitle, newStatus) => {
      const updatedTaskList = taskList.map(task => {
        if (task.title === taskTitle) {
          return { ...task, status: newStatus };
        }
        return task;
      });
      setTaskList(updatedTaskList);
    };
    const updateTaskInList = (oldTitle, newTitle, newDetail, newStatus) => {
      const updatedTaskList = taskList.map(task => {
        if (task.title === oldTitle) {
          return { ...task, title: newTitle, detail: newDetail, status: newStatus };
        }
        return task;
      });
  
      setTaskList(updatedTaskList);
    };
  
  return  ( 
    <div className="col-lg-4 col-md-4 col-sm-6 col-xl-4  mt-3 bg-success">
    <div className="card" style={{border:"2px solid #ffc266"}}>
  <div className="card-body ">
  {isEditing ? (
            <> <p className="card-text"><strong>Task Name:</strong></p>
              <input className="border border-warning-subtle"
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
               <p className="card-text"><strong>Description:</strong></p>
              <input className="border border-warning-subtle"
                type="text"
                value={editDetail}
                onChange={(e) => setEditDetail(e.target.value)}
              />
            </>
          ) : (
            <>
              <p className="card-text"><strong>Task Name:</strong> {title}</p>
              <p className="card-text"><strong>Description:</strong> {detail}</p>
            </>
          )}
    
    <div className="container text-center mt-3">
  <div className="row">
    <div className="col-lg-4 col-md-4 col-sm-4 col-lx-4">
    <p className="card-text mt-1"><strong>Satus</strong></p>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-4 col-lx-4">
    <Dropdown  onSelect={(selectedOption) => handleStatusChange(selectedOption)}>
                  <Dropdown.Toggle variant="warning" id="dropdown-basic">
                    {select}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="Completed">Completed</Dropdown.Item>
                    <Dropdown.Item eventKey="Not Completed">Not Completed</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
  </div>
  <div className="col">
      {/* Column */}
    </div>
 </div>
    </div>
    </div>
<div className="card-footer">
  <div className="container text-center">
  <div className="row">
    <div className="col-lg-6 col-md-6 col-6 col-lx-6">
    <button type="button" class="btn btn-success " onClick={isEditing ? handleUpdateClick : handleEditClick} >{isEditing ? 'Update' : 'Edit'}</button>
    </div>
    <div className="col-lg-6 col-md-6 col-6 col-lx-6">
    <button onClick={deleteButton} type="button" class="btn btn-danger cfooter">Delete</button>
    </div>
  </div>
  </div>
</div>
    </div> 
    </div>
  )
};

export default Card;