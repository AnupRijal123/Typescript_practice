import React from 'react';
import './App.scss';
let name: string = 'ram';
let age: number;
age = 10;
let users: string[] = ['ram', 'shyam'];
let items: (string | number)[] = ['juice', 'chips', 10];

function App() {
  return (
    <div>
      <h1>hello {name}</h1>
    </div>
  );
}

export default App;
