import React,{useReducer} from 'react';

import './App.css';
import { todoReducer, initialState } from './reducers/todoReducer';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
function App() {
  const [state, dispatch] = useReducer(todoReducer,initialState);
  console.log('state.item',state)
  const addItem = item =>{
    dispatch({type:"ADD_ITEM", payload: item})
  }
  const toggleItem =id=>{
    dispatch({type:"TOGGLE_ITEM" , payload:id})
  }
  const clearItem = event=>{
    dispatch({type: "CLEAR_ITEM"})
  }

  return (
    <div className="App">
      <TodoForm
        item={state.item}
        remove={clearItem}
        add={addItem}
        onChange={clearItem}
      />
      <TodoList todos={state} toggle={toggleItem}/>
    </div>
  );
}

export default App;
