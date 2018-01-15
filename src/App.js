import React, { Component } from 'react'
import TextInput from './TextInput'
import styles from './App.scss'

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <section className={styles.container}>
          <span className={styles.label}>That time in</span>
          <TextInput name="preposition" limit={25} />
          <span className={styles.label}>where</span>
          <TextInput
            name="conjunction"
            width="14rem"
            margin="0 0 0 .7rem"
            limit={150}
          />
          <span className={styles.label}>.</span>
        </section>
      </div>
    )
  }
}

export default App
