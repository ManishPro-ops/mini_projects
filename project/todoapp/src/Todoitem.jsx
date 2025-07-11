import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TodoItemsContext } from "./store/todoitems-store";

function Todoitem({ todoName, todoDate,ondelete }) {
  const {deleteitem}=useContext(TodoItemsContext)
  return (
    <>
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button" onClick={()=>{deleteitem(todoName)}}>
            <MdDeleteOutline/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todoitem;
