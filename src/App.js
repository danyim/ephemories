import React, { Component } from 'react'
import styled from 'styled-components'
import TextInput from './TextInput'
import styles from './App.scss'

// Hidden submit button to enable the form submission on enter
const HiddenSubmit = styled.input.attrs({
  type: 'submit'
})`
display: none;
`

class App extends Component {
  handleSubmit = e => {
    console.log('Submitting', this.state.preposition, this.state.conjunction)
    e.preventDefault()
  }

  handleInputChange = e => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <form className={styles.container} onSubmit={this.handleSubmit}>
          <span className={styles.label}>That time in</span>
          <TextInput
            name="preposition"
            limit={25}
            onChange={this.handleInputChange}
          />
          <span className={styles.label}>where</span>
          <TextInput
            name="conjunction"
            width="14rem"
            margin="0 0 0 .7rem"
            limit={150}
            onChange={this.handleInputChange}
          />
          <span className={styles.label}>.</span>
          <HiddenSubmit />
        </form>
      </div>
    )
  }
}

export default App
