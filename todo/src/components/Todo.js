import React  from 'react';




import "./Todo.css";
const Todo = ({ item, completed, toggle, id }) => {
  
  return (
    <div>
      <li className={completed ? "cross" : ""} onClick={() => toggle(id)}>
        {item}
      </li>
    </div>
  );
};

export default Todo;