import React from 'react'

interface Props {
    btnText: string
}

const Taskform = ({btnText}: Props) => {
  return (
    <form>
        <div>
            <label htmlFor="title">Título:</label>
            <input type="text" name='title' placeholder='título da tarefa' />
        </div>
        <div>
            <label htmlFor="difficulty">Dificuldade:</label>
            <input type="text" name='difficulty' placeholder='dificuldade da tarefa' />
        </div>
        <input type="submit" value={btnText} />
    </form>
  )
}

export default Taskform