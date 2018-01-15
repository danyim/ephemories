import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  display: ${props => (props.shouldExpand ? 'block' : 'inline-block')};
  ${props => (props.shouldExpand ? 'width: 99%;' : '')};
`

const Input = styled.input.attrs({
  type: 'text'
})`
  position: relative;
  top: 0.25rem;
  background-color: unset;
  border: none;
  border-bottom: 1px solid #eee;
  outline: 0;
  margin: ${props => (props.shouldExpand ? '0' : props.margin)};
  padding-bottom: 0.25rem;
  line-height: 2rem;
  font-family: 'EB Garamond', sans-serif;
  font-size: 1.5rem;
  // font-weight: ${props => (props.bold ? 'bold' : 'bold')};
  transition: 1s all;
  width: ${props => (props.shouldExpand ? '99%' : props.width)};

  &:hover, &:focus {
    border-bottom-color: black;
  }
`

const TextCounter = styled.span`
  position: absolute;
  opacity: ${props => (props.focused ? props.count / props.limit : 0)};
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 0.8rem;
  color: hsl(350, ${props => 35 * (props.count / props.limit)}%, 75%);
  top: 70%;
  right: 0;
  padding: ${props => props.margin};
  z-index: 1;
  transition: .2s all;
`

class TextInput extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    width: PropTypes.string,
    limit: PropTypes.number,
    expandLimit: PropTypes.number,
    margin: PropTypes.string
  }

  static defaultProps = {
    width: '8rem',
    onChange: () => {},
    limit: 50,
    expandLimit: 25,
    margin: '0 .7rem'
  }

  state = {
    value: '',
    focused: false
  }

  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleFocus(e) {
    this.setState({
      focused: true
    })
  }

  handleBlur(e) {
    this.setState({
      focused: false
    })
  }

  handleInputChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      value
    })

    this.props.onChange(e)
  }

  render() {
    return (
      <Container
        name={this.props.name}
        shouldExpand={this.state.value.length >= this.props.expandLimit}
      >
        <Input
          {...this.props}
          shouldExpand={this.state.value.length >= this.props.expandLimit}
          maxLength={this.props.limit}
          onChange={this.handleInputChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <TextCounter
          focused={this.state.focused}
          margin={this.props.margin}
          count={this.state.value.length}
          limit={this.props.limit}
        >
          {`${this.state.value.length} / ${this.props.limit}`}
        </TextCounter>
      </Container>
    )
  }
}

export default TextInput
