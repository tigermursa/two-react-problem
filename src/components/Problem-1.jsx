import React, { useEffect, useState } from "react";

const Problem1 = () => {
  //all states
  const [show, setShow] = useState("all");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("active");
  const [tasks, setTasks] = useState([]);

  //loading tasks from local storage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(data);
  }, []);

  // save to local storage

  const saveTasksToLocal = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  //handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { name, status };
    setTasks([...tasks, newTask]);
    // to save local storage
    saveTasksToLocal([...tasks, newTask]);
    setName("");
    setStatus("active");
  };

  const handleClick = (val) => {
    setShow(val);
  };
  console.log(tasks);

  //handle status change function

  const handleStatusChange = (taskIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].status = "completed";
    setTasks(updatedTasks);
    saveTasksToLocal(updatedTasks);
  };

  //delete task

  const handleDeleteTask = (tasksIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(tasksIndex, 1);
    setTasks(updatedTasks);
    saveTasksToLocal(updatedTasks);
  };

  // filtering the data of tasks
  const filteredTasks = () => {
    if (show === "active") {
      return tasks.filter((task) => task.status === "active");
    } else if (show === "completed") {
      return tasks.filter((task) => task.status === "completed");
    }
    return tasks;
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={handleSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <select
                // type="text"
                className="form-control"
                // placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value={"active"}>Active</option>
                <option value={"completed"}>Completed</option>
              </select>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks().map((task, index) => (
                <tr key={index}>
                  <td>{task.name}</td>
                  <td>
                    {task.status === "active" && <span>Active</span>}
                    {task.status === "completed" && <span>Completed</span>}
                  </td>
                  <td>
                    {task.status === "active" && (
                      <div>
                        <button
                          className="btn btn-success"
                          onClick={() => handleStatusChange(index)}
                        >
                          Done
                        </button>
                        <button
                          className="btn btn-danger ms-1"
                          onClick={() => handleDeleteTask(index)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
