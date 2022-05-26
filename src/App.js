import React, {useState, useEffect} from 'react';
import axios from 'axios'

import List from './components/List'
import AddList from './components/AddList'
import Task from './components/Task'

import './components/Todo.css'

function App() {
  const [lists, setLists] = useState(null)
  const [activeTask, setActiveTask] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3001/lists').then(({data}) => {
      setLists(data)
    })
  }, [])

  const onAddList = obj => {
    const newList = [
      ...lists, 
      obj
    ]
    setLists(newList)
  }

  return (
    <div className='wrapper'>
      <div className="todos">
        <div className="todos__header"></div>
        <AddList onAdd={onAddList}/>
        {lists ? (
          <List 
          items={lists} 
          onRemove={(id) => {
            const newlist = lists.filter(item => item.id !== id)
            setLists(newlist)
          }}
          onClickItem={
            item => setActiveTask(item)
          }
          /> 
        ) : ('Загрузка...')}
      </div>
      {activeTask ? (
        <Task 
        activeTask={activeTask}
        onCloseTask={
          close => setActiveTask(close)
        }
        onEdit={id => {
          console.log(id)
        }}
        />
      ) : (<></>)}
    </div>
  );
}

export default App;
