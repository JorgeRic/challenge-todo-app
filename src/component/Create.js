import React, { Component } from 'react'
import todoBackend from '../service/TodoBackend'
import {Redirect} from 'react-router-dom'

class Create extends Component {
  state = {
    title: '',
    body: '',
    redirect: false
  }

  handelSubmit = (event) => {
    const{title, body} = this.state
    console.log(this.state)
    event.preventDefault()
    todoBackend.createTodo({
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
        
          <button type='submit'>Añadir</button>
          {redirect ? <Redirect /> :null }
        </form>
      
      </div>
    )
  }
}

export default Create