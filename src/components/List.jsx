import React from 'react'
import axios from 'axios'

import closeSvg from './img/close.svg'

function List({items, onRemove, onClickItem}) {
  const removeList = (item) => {
    if(window.confirm('Удалить заметку?')) {
      axios.delete('http://localhost:3001/lists/' + item.id)
      .then(() => {
        onRemove(item.id)
      })
    }
  }

  return (
    <ul className="todos__list">
      {items.map((item) => (
        <li 
          onClick={onClickItem ? () => onClickItem(item) : null}
          key={item.id} 
          className="todo"
          >
          <div className={`circle ${item.color}`}></div>
          <div className="todo-text">{item.task}</div>
          <img 
            onClick={() => {removeList(item)}}
            className="del" 
            src={closeSvg} 
            alt='delete'/>
        </li>
      ))}
      
    </ul>
  )
}

export default List