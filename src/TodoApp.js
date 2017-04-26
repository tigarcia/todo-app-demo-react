import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      todos: [{id:0, title: "Walk moxie", description: "My cat moxie likes walks"}],
      count: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    let newTodo = {id: this.state.count, title, description};
    let todos = this.state.todos.slice();
    todos.push(newTodo);
    this.setState({
        todos: todos,
        count: this.state.count + 1,
        title: '',
        description: ''
    });
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    const arrayOfNewTodos = this.state.todos.map(function(todo) {
      return <TodoItem key={todo.id} title={todo.title} description={todo.description} />;
    })

    return (
      <div>
         <form onSubmit={this.handleSubmit}>
             <label>
                 Title
                 <input className="form-control" type="text" name="title" />
             </label><br/>
             <label>
                 Description <input type="text" className="form-control" name="description" value={this.state.description} onChange={this.handleChange} />
             </label>
             <button className="btn btn-primary" type="submit">Save</button>
         </form>
         <div>
             To Do:
             <ul>
               {arrayOfNewTodos}
             </ul>
         </div>
     </div>
    )
  }
}
