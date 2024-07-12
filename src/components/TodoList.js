import React from 'react';
import './style.css';

const TodoList = (props) => {
  return (
    <li className='list-iitem'>
       <p> {props.item}</p>
        <span className='icons'>
        <i className="fa-solid fa-trash-can" onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>
    </li>
  )
}

export default TodoList
