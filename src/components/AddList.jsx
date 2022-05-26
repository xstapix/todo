import React, {useState} from 'react'
import axios from 'axios'

import addSvg from './img/add.svg'

function AddList({onAdd}) {
  const [inputValue, setInputValue] = useState('')

  const addList = () => {
    if(!inputValue) {
      alert('Введите заметку')
      return
    } 

    axios.post('http://localhost:3001/lists', {task: inputValue})
    .then(({data}) => {
      const listObj = {...data}
      onAdd(listObj)
      console.log(data)
    })

    setInputValue('')
  }

  return (
    <ul className="todos__list">
      <li>
        <img 
          onClick={addList} 
          className="add" 
          src={addSvg} 
          alt='plus'/>
        <input 
          className="add-todo" 
          type="text" 
          placeholder="Добавить заметку"
          value={inputValue} 
          onChange={event => setInputValue(event.target.value)} />
      </li>
    </ul>
  )
}

export default AddList