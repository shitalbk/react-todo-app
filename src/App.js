import React from 'react';
import TodoList from './components/todoList';
import TodoForm from './components/todoForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      todos: ["Finish cooking","Buy groceries","Clean the room","Pay bills"],
  };
}
addTodo = todo => {
  this.setState(prevState => ({
    todos: [...prevState.todos, todo],
  }));
};
render() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      <TodoForm addTodo={this.addTodo} />
    </div>
  );
}
}
export default App;
