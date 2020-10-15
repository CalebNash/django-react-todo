import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'
import './App.css';

class Todo extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    todos: [],
  }
this.handleSubmit = this.handleSubmit.bind(this);
this.removeTodo = this.removeTodo.bind(this);
this.editTodo = this.editTodo.bind(this);
}

componentDidMount() {
  fetch('/api/v1/')
    .then(responce => responce.json())
    .then(data => this.setState({todos: data}))
    .catch(error => console.log('Error: ', error));
  }

  handleSubmit(event, data){
    event.preventDefault();
    fetch('/api/v1/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(responce => responce.json())
    .then(data => {
    const todos = [...this.state.todos, data];
    this.setState({todos: todos});
  })
  }

  removeTodo(id) {
      fetch(`/api/v1/${id}/`, {
        method: 'DELETE',
      })
      .then(responce => responce)
      .then(data => {
        const todos = [...this.state.todos];
        const index = todos.findIndex(todo => todo.id === id)
        todos.splice(index,1);
        this.setState({todos})
      })
      .catch(error => console.log('Error:', error))
    }

    editTodo(data, id){
      if(data.checked === false){
        data.checked = true;
        // let str = data.title;
        // var result = str.strike();
        // console.log(result);
        // document.querySelector("todo-title").innerHTML = result;
      }else if(data.checked === true){
        data.checked = false;
      }
      fetch(`api/v1/${id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response)
      .then(responce => console.log(responce))
      .catch(error => console.log('Error:', error));
  }



  render(){
    return (
      <div className='container'>
        <h1 className='name-of project'>TODOS</h1>
        <TodoForm handleSubmit= {this.handleSubmit}/>
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo}  editTodo={this.editTodo}/>
      </div>
    );
  }
}

export default Todo;
