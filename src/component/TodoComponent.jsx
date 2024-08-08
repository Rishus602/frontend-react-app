import React, { useState } from 'react';

const TodoComponent = (props) => {
const[message, setMessage] = useState('');
  
    return(
   
  
    <>

    

    <div className='input-container'>
        <input type="text" className='input-box-todo'
         placeholder='Add your to do' value={message}
         onChange={(e)=>{
            setMessage(e.target.value)
         }}
         />

    </div>

    <button className='btn' 
    onClick={()=>{
        props.addList(message)

        setMessage("")
    }}
    >Add List</button>
     
    </>
)
}

export default TodoComponent;