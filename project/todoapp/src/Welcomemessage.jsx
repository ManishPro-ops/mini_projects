import React, { useContext } from 'react'
import { TodoItemsContext } from './store/todoitems-store'

function Welcomemessage() {
 
  const {todoitems}=useContext(TodoItemsContext);
  return ( todoitems.length === 0 &&
        <h1>ENJOY YOUR DAY</h1>
  )
}

export default Welcomemessage
