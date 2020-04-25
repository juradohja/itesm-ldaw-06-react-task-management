import React, {useEffect, useState} from 'react';
import axios from "axios";
import './App.css';
import Header from "./js/components/Header";
import TodoList from "./js/components/TodoList";
import CreateTodo from "./js/components/CreateTodo";

const server = 'http://localhost:3001';

function App() {

  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const result = await axios(server + '/tasks');
      setTodos(result.data);
    } catch (err) {
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [todos]);

  const addTodo = (newTodoDesc) => {
    axios({
      method: 'post',
      url: server + '/tasks',
      data: {
        description : newTodoDesc
      }
    }).then((_newTask) => {
      fetchTodos();
    }).catch((e) => {
      console.log(e);
    })
  };

  const markAsDone = (todoId) => {
    // BACKEND
    axios({
      method: 'put',
      url: server + '/done/' + todoId,
    }).then((_updatedTasl) => {
      fetchTodos();
    })
  };

  const deleteTodo = (todoId) => {
    // BACKEND
    axios({
      method: 'delete',
      url : server + '/delete/' + todoId,
    }).then((_id) => {
      fetchTodos();
    })
  };

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
