import React, { useState } from 'react';
import "./Todolist.css"
import NavResp from './Nav';

export default function ToDoList() {
    const [todolist,setTodolist] = useState([]) 
    const [textinput,setTextinput] = useState("") 
  return (
    <>
    <NavResp />
    <div className='cont row'>
        <div className='col-12 input-btn  p-0'>
            <input className='col-lg-8 col-12' type="text" onChange={(evt)=>{setTextinput(evt.target.value)}}/>
            <button className='add-button col-lg-4 col-12' onClick={(e)=>{setTodolist([...todolist,{id:todolist.length,text:textinput}]);e.target.previousElementSibling.value = ""}}> ajouter </button>
        </div>
        <table className='col-12 todo-table'>
            <thead>
                <tr>
                <th>todos</th>
                <th>action</th>
                </tr>
            </thead>
            <tbody>
            {
                todolist.map(
                    todo => {
                        return(
                            <tr>
                                <td className='todo'>{todo.text}</td>
                                <td className='actionss'><button className='butn' onClick={()=>{setTodolist(todolist.filter((val)=>val.id!==todo.id))}}>supprimer</button><button className='butn' onClick={(evt)=>{evt.target.parentNode.previousElementSibling.style.textDecoration='line-through'}}>complet</button></td>
                            </tr>
                        )
                    }
                )
            }
            
            </tbody>
            <tfoot></tfoot>
        </table>
    </div>
    </>
  )
}
