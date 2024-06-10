import React from 'react'
import styles from './Taskform.module.css'

interface Props {
    btnText: string
}

const Taskform = ({btnText}: Props) => {
  return (
    <form className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Título:</label>
            <input type="text" name='title' placeholder='título da tarefa' />
        </div>
        <div  className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade:</label>
            <input type="text" name='difficulty' placeholder='dificuldade da tarefa' />
        </div>
        <input type="submit" value={btnText} className={styles.submit}/>
    </form>
  )
}

export default Taskform