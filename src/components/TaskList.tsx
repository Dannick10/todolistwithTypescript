import React from 'react'

import { Itask } from '../interfaces/Task'

import styles from '../interface/taskList.module.css'

interface Props {
  taskListArray: Itask[]
}

const TaskList = ({taskListArray}: Props) => {
  return (
    <>  
  {taskListArray.length > 0 ? (
      taskListArray.map((test) => (
        <div key={test.id}>
          <div>
          <h2>{test.title}</h2>
          <p>Dificuldade: {test.difficulty}</p>
          </div>
          <div>
          <i className="fa-solid fa-pencil"></i>
          <i className="fa-solid fa-trash"></i>
          </div>
        </div>
      ))
  ): (
    <p>Não tem tarefas</p>
  )}
    </>
  )
}

export default TaskList