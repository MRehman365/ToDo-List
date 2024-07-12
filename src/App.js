import React, { useState, useEffect } from 'react';
import TodoForm from './components/todoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  // Initialize state with data from local storage or an empty array
  const [listTodo, setListTodo] = useState(
    JSON.parse(localStorage.getItem('todoList')) || []
  );

  // Function to add a new task to the list
  const addList = (inputText) => {
    if (inputText !== '') {
      const newList = [...listTodo, inputText];
      setListTodo(newList);
      // Save updated list to local storage
      localStorage.setItem('todoList', JSON.stringify(newList));
    }
  };

  // Function to delete a task from the list
  const deleteList = (key) => {
    const newList = [...listTodo];
    newList.splice(key, 1);
    setListTodo(newList);
    // Save updated list to local storage
    localStorage.setItem('todoList', JSON.stringify(newList));
  };

  // Clear local storage when component unmounts
  useEffect(() => {
    return () => {
      localStorage.removeItem('todoList');
    };
  }, []);

  return (
    <div className="App">
      <div className='center-container'>
        <h2>To-Do List</h2>
        <TodoForm addList={addList} />
        <hr/>
        {listTodo.map((listItem, i) => (
          <TodoList key={i} index={i} item={listItem} deleteItem={deleteList} />
        ))}
      </div>
    </div>
  );
}

export default App;
