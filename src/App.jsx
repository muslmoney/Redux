import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {show , todoItem} from './redux/slice/todo'

const App = () => {
  const [Id, setId] = useState(0)
  const todo = useSelector(state => state.todo.items);

  const dispatch = useDispatch();


  const handleShow = () => dispatch(show())

  const handleGetItem = id => dispatch(todoItem({id})) // {id: id} => {id}

  return(
    <div>
      <button onClick={handleShow}>Show initialState</button>
      <button onClick={() => {
        setId(prev => prev > todo.length ? 0 : prev + 1)

        handleGetItem(Id);
      }}>Get Item {Id}</button>
    </div>
  )
}
export default App