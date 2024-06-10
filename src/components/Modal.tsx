import React from 'react'
import styles from './modal.module.css'

interface Props {
    children: React.ReactNode
}

const Modal = ({children}: Props) => {

    const closemodal = (e: React.MouseEvent): void => {
        const modal = document.querySelector('#modal')
        modal!.classList.add('hide')
    }

  return (
    <div id='modal' className='hide'>
        <div className={styles.fade} onClick={closemodal}></div>
        <div className={styles.modal}>
            <h2>Texto modal</h2>
            {children}
        </div>
    </div>
  )
}

export default Modal