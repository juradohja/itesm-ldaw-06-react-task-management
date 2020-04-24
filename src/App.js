import React, {useState} from 'react';
import './App.css';
import Header from "./js/components/Header";
import TodoList from "./js/components/TodoList";
import CreateTodo from "./js/components/CreateTodo";

function App() {

  const [todos, setTodos] = useState([
    {id : 1, description : 'task1', status : 'done'},
    {id : 2, description : 'task2', status : 'pending'},
    {id : 3, description : 'task3', status : 'pending'}
  ]);

  const addTodo = (newTodoDesc) => {
    // BACKEND
  }

  const markAsDone = (todoId) => {
    // BACKEND

  }

  const deleteTodo = (todoId) => {
    // BACKEND
  }

  return (
      <>
        <Header />
        <div className="App">
          <main role="main" className="container">
            <div className="row">
              <div className="col-12">
                <h1>TODO List</h1>
              </div>
            </div>
            <CreateTodo addTodo={addTodo}/>
            <TodoList todos={todos} markAsDone={markAsDone} deleteTodo={deleteTodo}/>
          </main>
        </div>
      </>
  );
}

export default App;
