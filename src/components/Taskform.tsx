import React, {useState, ChangeEvent, FormEvent, useEffect } from 'react'
import styles from './Taskform.module.css'

import {Itask} from '../interfaces/Task'
import TaskList from './TaskList'

interface Props {
    btnText: string,
    tasklistArray: Itask[]
    setTaskListArray?: React.Dispatch<React.SetStateAction<Itask[]>>
}


const Taskform = ({btnText, tasklistArray ,setTaskListArray}: Props) => {

    const [id, setId] = useState<number>(0)
    const [title,setTitle] = useState<string>('')
    const [difficulty, setDifficulty] = useState<number>(0)

    const handleTaskHandle = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const id = Math.floor(Math.random() * 1000)

        const newTask: Itask = {id,title, difficulty}

        setTaskListArray!([...tasklistArray, newTask])

        setTitle('')
        setDifficulty(0)

        console.log(tasklistArray)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
       if(e.target.name === 'title') {
        setTitle(e.target.value)
       } else{
        setDifficulty(parseInt(e.target.value))
       }

    }

  return (
    <form className={styles.form} onSubmit={handleTaskHandle}>
        <div className={styles.input_container}>
            <label htmlFor="title">Título:</label>
            <input type="text" name='title' placeholder='título da tarefa' value={title} onChange={handleChange} />
        </div>
        <div  className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade:</label>
            <input type="number" name='difficulty' placeholder='dificuldade da tarefa' value={difficulty} onChange={handleChange} />
        </div>
        <input type="submit" value={btnText} className={styles.submit}/>
    </form>
  )
}

export default Taskform