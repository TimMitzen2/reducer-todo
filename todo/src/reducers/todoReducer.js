export const initialState=[{
   item: 'Learn about reducers',
   completed: false,
   id: 3892987589
}];


export const todoReducer=(state, action)=>{
switch(action.type){
   case "ADD_ITEM":
   return[...state, {item: action.payload, completed: false, id: Date.now()}]
   case "TOGGLE_ITEM":
   return state.map(todo => 
      todo.id===action.payload ?
        {...todo, completed: !todo.completed
      }
      :todo
   )
   case "CLEAR_ITEM":
   return state.filter(item => {
      return !item.completed
   })

default:
return state

}

};