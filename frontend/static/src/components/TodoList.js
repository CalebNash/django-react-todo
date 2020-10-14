import React from 'react';


function TodoItem(props){
  return(
    <div className='list-group'>
      <p className='list-group-item'>{props.todo.title}</p>
    </div>
  )
}



function TodoList(props){
  const todos = props.todos.map(todo => <TodoItem key={todo.id} todo={todo} removePost={props.removePost}/>)
  return (
    <React.Fragment>
      <div className='col-12 col-md-6'>{todos}</div>
    </React.Fragment>
  )
}

export default TodoList ;
