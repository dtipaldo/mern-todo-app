import  React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TodosList from "./components/todos-app.components";
import EditTodo from "./components/edit-todo.component";
import CreateTodo from "./components/create-todo.component";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="www.google.com" target="_blank"></a>
                <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
              <Link to="/" className="navbar-brand">Todo Today (using MERN Stack)</Link>
              <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item"><Link to="/" className="nav-link">All Todos</Link></li>
                  <li className="navbar-item"><Link to="/create" className="nav-link">Create Todo</Link></li>
                </ul>
              </div>
            </nav>
            <h2>MERN-Stack Todo App</h2>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          </div>
        </Router>
    )
  }
}

export default App
