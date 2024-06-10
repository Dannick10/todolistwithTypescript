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
          <p>{test.title}</p>
        </div>
      ))
  ): (
    <p>Não tem tarefas</p>
  )}
    </>
  )
}

export default TaskList