import React, { Component } from 'react'
import Input from './Input'
import styles from './App.scss'

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <section className={styles.container}>
          <span className={styles.label}>That time in</span>
          <Input type="text" />
          <span className={styles.label}>where</span>
          <Input type="text" />
          <span className={styles.label}>.</span>
        </section>
      </div>
    )
  }
}

export default App
