import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.string,
  creditCardType: PropTypes.string,
}

const defaultProps = {
  firstName: '',
  lastName: '',
  age: '',
  creditCardType: '',
}

class Component2 extends React.Component {
  state = {
    visible: false,
    timerId: undefined,
    startAt: undefined,
  }

  startTimer = () => {
    const timerId = setTimeout(() => {
      console.log('clear')

      this.setState({
        visible: false,
        timerId: false,
        startAt: undefined,
      })
    }, 5000)

    this.setState({
      visible: true,
      timerId,
      startAt: Date.now(),
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps === this.props) {
      return
    }

    if (!this.state.visible) {
      console.log('init timer')
      return this.startTimer()
    }

    // Timer is already rendered. Reset prev timer + start new timer for 5 sec

    console.log('update timer')
    const timerId = this.state.timerId
    clearTimeout(timerId)
    this.startTimer()
  }

  render() {
    const {firstName, lastName, age, creditCardType} = this.props
    const {visible} = this.state

    if (!visible || (!firstName && !lastName && !lastName)) {
      return null
    }

    const formattedName = `${firstName} ${lastName}`

    console.log('(render) ___________2')

    return (
      <>
        <h2>Component 2:</h2>
        <div>{formattedName}</div>
        <div>{age}</div>
        <div>type: {creditCardType}</div>
      </>
    )
  }
}

Component2.propTypes = propTypes
Component2.defaultProps = defaultProps

export default Component2
