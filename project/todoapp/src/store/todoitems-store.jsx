import { createContext} from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoitems: [],
  addnewitem: () => {},
  deleteitem: () => {},
});

const todoItemsReducer = (currtodoitems, action) => {
  let newTodoitems = currtodoitems;
  if (action.type === "NEW_ITEM") {
    newTodoitems = [
      ...currtodoitems,
      { name: action.payload.itemname, duedate: action.payload.duedate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoitems = currtodoitems.filter(
      (item) => item.name !== action.payload.todoitemname
    );
  }
  return newTodoitems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoitems, dispatchtodoitems] = useReducer(todoItemsReducer, []);
  // const [todoitems, settodoitems] = useState([]);

  const addnewitem = (itemname, itemduedate) => {
    // settodoitems((currvalue) => [
    //   ...currvalue,
    //   { name: itemname, duedate: itemduedate },
    // ]); //functional updation

    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemname,
        itemduedate,
      },
    };
    dispatchtodoitems(newItemAction);
  };

  const deleteitem = (todoitemname) => {
    // const newtodoitem = todoitems.filter((item) => item.name !== todoitemname);
    // settodoitems(newtodoitem);
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoitemname,
      },
    };
    return dispatchtodoitems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider value={{ todoitems, addnewitem, deleteitem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
