import React, { useState } from 'react'
import './style.css'
const TodoForm = (props) => {
  const [ inputText, setInputText] = useState('');

  return (
    <div className='input-container'>
      <input
       className='input-box'
       type="text"
       placeholder='Add Your Task ...'
       value={inputText}
       onChange={e=>{
        setInputText(e.target.value)
       }}

      />
      <button className='add-task-btn' onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }}>Add Task</button>
      
    </div>
  )
}

export default TodoForm
