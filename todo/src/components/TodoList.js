import React from 'react'

import Todo from "./Todo"
const TodoList = ({ todos, toggle }) => {
  console.log('todo',todos)
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} toggle={toggle} />
      ))}
    </ul>
  );
};

export default TodoList;