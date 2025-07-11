import { useContext, useState } from "react";
import { MdAddBox } from "react-icons/md";
import { TodoItemsContext } from "./store/todoitems-store";

function Apptodo({ newitem }) {
  const {addnewitem} = useContext(TodoItemsContext);
  const [todoname, settodoname] = useState("");
  const [duedate, setduedate] = useState("");

  const handlenamechange = (event) => {
    settodoname(event.target.value);
  };

  const handledatechange = (event) => {
    setduedate(event.target.value);
  };

  const handleonbuttonclicked = () => {
    addnewitem(todoname, duedate);
    setduedate("");
    settodoname("");
  };

  return (
    <>
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter to do here"
              value={todoname}
              onChange={handlenamechange}
            />
          </div>
          <div className="col-4">
            <input 
              type="date" 
              value={duedate} 
              onChange={handledatechange} 
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success kg-button"
              onClick={handleonbuttonclicked}
            >
              <MdAddBox/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Apptodo;
