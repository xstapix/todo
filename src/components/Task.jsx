import React, {useState, useEffect} from 'react'
import axios from 'axios'

import closeSvg from './img/close.svg'

function Task({activeTask, onCloseTask}) {
  const [taskValue, setTaskValue] = useState(activeTask.id)

  useEffect(() =>{
    setTaskValue(activeTask.task)
  }, [activeTask])

  const editList = () => {
    // if(!taskValue) {
    //   alert('Введите заметку')
    //   return
    // } 

    // axios.post('http://localhost:3001/lists', {task: taskValue})
    // .then(({data}) => {
    //   const listObj = {...data}
    //   // onAdd(listObj)
    //   console.log(data)
    // })
  }

  const closeTask = (off) => {
    onCloseTask(off)
  }

  return (
    <div className='task'>
      <div className='task__header'>
        <div onClick={editList} className='task__header__save'></div>
        <img 
          onClick={() => {closeTask(null)}} 
          className='task__header_close' 
          src={closeSvg} 
          alt='Close'/>
      </div>
      <textarea 
        className='task__text' 
        value={taskValue} 
        onChange={event => {setTaskValue(event.target.value)}}>
      </textarea>
    </div>
  ) 
}

export default Task