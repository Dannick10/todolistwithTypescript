import React from 'react'
import styles from './Header.module.css'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
    <h1>React ts todo</h1>
  </header>
  )
}

export default Header