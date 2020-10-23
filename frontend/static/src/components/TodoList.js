import React from 'react';


function TodoItem(props){

  return(
    <div className='list-group'>
      <div className='list-group-item'>
        <input className='toggle done-todo' type='checkbox' onClick={() => props.editTodo(props.todo, props.todo.id)}/>
        <p className='todo-title'>{props.todo.title}</p>
        <button className="btn delete"type="button" onClick={() => props.removeTodo(props.todo.id)}><i id="orderButton" className="fas fa-times"></i></button>
      </div>
    </div>
  )
}



function TodoList(props){
  const todos = props.todos.map(todo => <TodoItem key={todo.id} todo={todo} removeTodo={props.removeTodo} editTodo={props.editTodo}/>)
  return (
    <React.Fragment>
      <div className='col-12 col-md-4'>{todos}</div>
    </React.Fragment>
  )
}

export default TodoList ;
