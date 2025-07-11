import { useContext } from "react";
import { TodoItemsContext } from "./store/todoitems-store";
import Todoitem from "./Todoitem";
import styles from "./Todoitems.module.css"

const TodoItems = () => {

  const {todoitems}=useContext(TodoItemsContext)
  return (
    <>
      <div className={styles.itemContainer}>
        {todoitems.map((item, index) => {
          return (
            <Todoitem
              key={index}
              todoDate={item.duedate}
              todoName={item.name}
            />
          );
        })}
      </div>
    </>
  );
};

export default TodoItems;
