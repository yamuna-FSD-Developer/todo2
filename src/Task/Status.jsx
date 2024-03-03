import Dropdown from 'react-bootstrap/Dropdown';

function Status({ selectedStatus, setSelectedStatus }) {
  const handleSelect = (selectedOption) => {
    console.log('Selected Status:', selectedOption);
    setSelectedStatus(selectedOption);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mt-1">
          <h4 style={{ color: "#000066" }}>Task List:</h4>
        </div>
        <div className="col-6 mt-1">
          <div className="row">
            <div className="col-5 text-sm-center text-md-end text-lg-end mt-1">
              <h4 style={{ color: "#000066" }}>Filter: </h4>
            </div>
            <div className="col-7  text-sm-start  text-md-start text-lg-start">
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                  {selectedStatus}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="All">All</Dropdown.Item>
                  <Dropdown.Item eventKey="Completed">Completed</Dropdown.Item>
                  <Dropdown.Item eventKey="Not Completed">Not Completed</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;




