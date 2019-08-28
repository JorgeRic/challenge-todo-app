import React, { Component } from 'react'
import todoBackend from '../service/TodoBackend'
import {Redirect} from 'react-router-dom'

class Modificar extends Component {
  state = {
    title: '',
    body: '',
    redirect: false
  }

  componentDidMount(){
    const id = this.props.match.params.todoId
    todoBackend.getTodo(id)
    .then(response => {
      this.setState({
        title: response.data.title,
        body: response.data.body
      })
    })
  }

  handelSubmit = (event) => {
    const{title, body} = this.state
    const{todoId} = this.props.match.params
    console.log(this.state)
    event.preventDefault()
    todoBackend.updateTodo(todoId, {
      title,
      body
    
    })
    .then(() => {
      this.setState({
        redirect: true
      })
    })
  }
  
  handelOnChange = (event) => {
    const{name,value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const {title, body, redirect} = this.state
    return (
      <div>
        <form onSubmit ={this.handelSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" placeholder="" value={title} name= "title" onChange={this.handelOnChange }></input>
          <label htmlFor="body">Body</label>
          <input type="text" id="body" placeholder="" value={body} name= "body" onChange={this.handelOnChange }></input>
        
          <button type='submit'>Modificar</button>
          {redirect ? <Redirect /> :null }
        </form>
      
      </div>
    )
  }
}

export default Modificar