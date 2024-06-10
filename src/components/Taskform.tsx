import React, {useState, ChangeEvent, FormEvent} from 'react'
import styles from './Taskform.module.css'

interface Props {
    btnText: string
}

import {Itask} from './interfaces/Task'

const Taskform = ({btnText}: Props) => {

    const [id, setId] = useState<number>(0)
    const [title,setTitle] = useState<string>('')
    const [difficulty, setDifficulty] = useState<number>(0)

    const handleTaskHandle = () => {

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
       if(e.target.name === 'title') {
        setTitle(e.target.value)
       } else{
        setDifficulty(parseInt(e.target.value))
       }

       console.log(title)
       console.log(difficulty)
    }

  return (
    <form className={styles.form} onSubmit={handleTaskHandle}>
        <div className={styles.input_container}>
            <label htmlFor="title">Título:</label>
            <input type="text" name='title' placeholder='título da tarefa' onChange={handleChange} />
        </div>
        <div  className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade:</label>
            <input type="number" name='difficulty' placeholder='dificuldade da tarefa'onChange={handleChange} />
        </div>
        <input type="submit" value={btnText} className={styles.submit}/>
    </form>
  )
}

export default Taskform