import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Taskform from './components/Taskform'
import TaskList from './components/TaskList'
import Modal from './components/Modal'

import {Itask} from './interfaces/Task'

function App() {
  const [count, setCount] = useState(0)

  const [tasklistArray, setTaskListArray] = useState<Itask[]>([])

  const deleteTask = (id: number) => {
   setTaskListArray(
    tasklistArray.filter(task => {
      return task.id !== id
    })
   )
  }

  const hiderorShowmodal = (display: boolean) => {
    const modal =document.querySelector('#modal')
    if(display) {
      modal!.classList.remove('hide')
    } else {
      modal!.classList.add('hide')
    }
  }

  const editTask = ():void => {
    hiderorShowmodal(true)
  }

  return (
    <>
      <div>
      <Modal children={<Taskform btnText='editar tarefa' setTaskListArray={setTaskListArray}/>}/>
      <Header />
      <main className="main">
          <div>
            <h2>O que voçê vai fazer?</h2>
            <Taskform btnText='Criar tarefa' tasklistArray
            ={tasklistArray} setTaskListArray={setTaskListArray} />
          </div>
          <div>
            <h2>Suas tarefas:</h2>
            <p>listas</p>
            <TaskList taskListArray={tasklistArray} handleDelete={deleteTask} handleedit={editTask}/>
          </div>
      </main>
      <Footer />

      </div>    
    </>
  )
}

export default App
