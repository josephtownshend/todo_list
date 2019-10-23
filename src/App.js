import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
