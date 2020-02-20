import { BrowserRouter as Router, Route } from 'react-router-dom';

import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos.js';
import Header from './Components/layout/Header.js';
import AddTodo from './Components/AddTodo.js';
import About from './Components/pages/About.js';
import uuid from 'uuid';
import axios from 'axios';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'take out the garbage',
        complete: false
      },
      {
        id: 2,
        title: 'do your homework',
        complete: false
      }
    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=0')
      .then(res => this.setState({ todos: res.data }))
  }


  //toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  //delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  //add toto
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(), 
      title: title,
      complete: false
    }
  this.setState({ todos: [...this.state.todos, newTodo] });
  }


  render() {

    return (
      <Router>
        <div className="app">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Header />
                <Route exact path="/" render={props => (
                  <React.Fragment>
                    <AddTodo addTodo={this.addTodo} />
                    <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                  </React.Fragment>
                )} />
                <Route path="/about" component={About} />
              </div> 
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
