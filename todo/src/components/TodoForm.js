import React, {useState} from "react";

const TodoForm = ({  remove,  add,  }) => {
 const [newText, setNewText] = useState('')
  const handleInput = event => {
     event.preventDefault();
     setNewText(event.target.value);

  }
  const handleSubmit = event => {
   event.preventDefault();
  if(!newText){
     return 
  }
   add(newText);
   setNewText("");
 };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newText}  onChange={handleInput}/>
        <button type="submit" >Add</button>
        <button onClick={remove}>Remove</button>
      </form>
    </>
  );
};

export default TodoForm;