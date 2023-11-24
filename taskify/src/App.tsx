import { useState } from 'react'
import React from "react";
import './App.css'
import AddTodo from './components/AddTodo'
import { Todo } from './model'
import TodoList from './components/TodoList'


const App: React.FC = () => {
  
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <>
      <div className="App">
        <span className='heading'>Taskify</span>
        <AddTodo todo={todo} setTodo={setTodo} handleAdd = {handleAdd}/>
        <TodoList setTodos={setTodos}/>
      </div>
    </>
  )
}

export default App
