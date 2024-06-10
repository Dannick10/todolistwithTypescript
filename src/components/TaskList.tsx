import React from 'react'

import { Itask } from '../interfaces/Task'

import styles from './taskList.module.css'

interface Props {
  taskListArray: Itask[]
  handleDelete(id: number): void
  handleedit():void
}

const TaskList = ({taskListArray, handleDelete, handleedit}: Props) => {
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
          <i className="fa-solid fa-pencil" onClick={() => handleedit()}></i>
          <i className="fa-solid fa-trash" onClick={() => {handleDelete(test.id)}}></i>
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