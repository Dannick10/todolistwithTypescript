import React from 'react'

import { Itask } from '../interfaces/Task'

import styles from './taskList.module.css'

interface Props {
  taskListArray: Itask[]
}

const TaskList = ({taskListArray}: Props) => {
  return (
    <>  
  {taskListArray.length > 0 ? (
      taskListArray.map((test) => (
        <div key={test.id} className={styles.task}>
          <div className={styles.details}>
          <h2>{test.title}</h2>
          <p>Dificuldade: {test.difficulty}</p>
          </div>
          <div className={styles.actions}>
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