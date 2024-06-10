import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Taskform from './components/Taskform'
import TaskList from './components/TaskList'

import {Itask} from './interfaces/Task'

function App() {
  const [count, setCount] = useState(0)

  const [tasklistArray, setTaskListArray] = useState<Itask[]>([])

  return (
    <>
      <div>
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
            <TaskList/>
          </div>
      </main>
      <Footer />

      </div>    
    </>
  )
}

export default App
