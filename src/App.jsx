import TodoComponent from './component/TodoComponent'
import TodoList from './component/TodoList';
import './App.css'
import { useState } from 'react'
function App() {

const[todoList,setTodoList] = useState([]);
let addList = (inputText)=>{
  setTodoList([...todoList, inputText])
}
const deleteListItem = (key) =>{
  let newListTodo = [...todoList];
  newListTodo.splice(key,1);
  setTodoList([...newListTodo])
}
  return (
    <>

    <div className="main-container">
      <div className="center-container">

      <TodoComponent addList={addList}/>
      
      <hr />
      {todoList.map((addList,index)=>{
        return(
          <TodoList key={index} index={index} item = {addList} deleteListItem={deleteListItem}/>
        )
      })}
      </div>
    </div>
    </>
  )
}

export default App
