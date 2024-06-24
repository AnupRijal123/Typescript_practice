import React from 'react';
import './App.scss';
import InputField from './components/InputField';
import { useState } from 'react';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedArray = localStorage.getItem('todosArray');
    return storedArray ? JSON.parse(storedArray) : []
  });
  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo) {
      setTodos([{
        id: Date.now(), todo: todo, isCompleted: false
      }, ...todos,])
    }
    setTodo('');
  };
  console.log(todos);
  localStorage.setItem('todosArray', JSON.stringify(todos));
  console.log(...todos);
  return (
    <div className="main-container">
      <div className="content-container">
        <h1 className='heading'>To Do App</h1>
        <div className="input-row">
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
          <button className="clear-button" onClick={() => setTodos([])}>clear all</button>
        </div>


        <TodoList todos={todos} setTodos={setTodos} />

      </div>
    </div>
  )
}

export default App;
