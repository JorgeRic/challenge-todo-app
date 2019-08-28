import React, { Component } from 'react'
import todoBackend from '../service/TodoBackend'
import {Link} from 'react-router-dom'

class Home extends Component {
  state = {
    todos:[]
  }

  componentDidMount(){
    todoBackend.getAllTodos()
    .then(response => {
      this.setState({
        todos: response.data
      })
    })
  }
  
  handleDeleteClick = (id) => {
    todoBackend.deleteTodo(id)
    .then(()=>{
     
      const filteredTodos = this.state.todos.filter((singleTodo) => {
        return singleTodo._id !== id
      })
      this.setState({
        todos: filteredTodos
      })
      })
   }
  render() {
    const{todos} = this.state
    return (
      <div>
        {todos.length > 0 ? todos.map((todo) => {
            return (
              <article key = {todo._id}>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                <Link to={`/modificar/${todo._id}`}>Modificar todo</Link>
                <p>yhuvgvvh</p>
                <button onClick = {() => {
                this.handleDeleteClick(todo._id)
                 }}>X</button>
              </article>
            )
        }) : <p>Loading ....</p>
      }
        <Link to='/create'><button>Create a new todo</button></Link>
      
      </div>
    )
  }
}

export default Home






