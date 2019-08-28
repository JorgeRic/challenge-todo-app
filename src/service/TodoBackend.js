import axios from 'axios'

class TodoBackend {
  constructor(){
    this.todoStore = axios.create({
      baseURL: 'http://localhost:4000/api/v1'
    })
  }
  getAllTodos(){
    return this.todoStore.get('/todos')
    .then(response => response)
  }

  getTodo(id){
    return this.todoStore.get(`/todos/${id}`)
    .then(response => response)
  }

  
  
  createTodo(newTodo){
    return this.todoStore.post('/todos', newTodo)
    .then(response => response)
  }
  deleteTodo(id){
    return this.todoStore.delete(`/todos/${id}`)
    .then(response => response)
  }
  updateTodo(id, updatedTodo){
    return this.todoStore.put(`/todos/${id}`, updatedTodo)
    .then(response => response)
  }

}
const todoBackend = new TodoBackend()

export default todoBackend

// La parte del service no es de Reac,  por lo que la clase es una clase normal


