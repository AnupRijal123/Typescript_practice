import React from 'react';
import './App.scss';
import InputField from './components/InputField';
import { useState } from 'react';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo) {
      setTodos([...todos, {
        id: Date.now(), todo: todo, isCompleted: false
      }])
    }
    setTodo('');
  };
  console.log(todos);
  return (
    <div className="main-container">
      <div className="content-container">
        <h1 className='heading'>To Do App</h1>
        <div className="input-row">
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        </div>


        <TodoList todos={todos} setTodos={setTodos} />

      </div>
    </div>
  )
}

export default App;
