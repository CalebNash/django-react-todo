import React from 'react';
import TodoList from './components/TodoList'
import './App.css';

class Todo extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    todos: [],
  }

}

componentDidMount() {
  fetch('/api/v1/')
    .then(responce => responce.json())
    .then(data => this.setState({todos: data}))
    .catch(error => console.log('Error: ', error));
  }

  render(){
    return (
      <div className='container'>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default Todo;
