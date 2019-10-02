import React from 'react'

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
    if (
      prevProps.firstName === this.props.firstName &&
      prevProps.lastName === this.props.lastName &&
      prevProps.age === this.props.age
    ) {
      return
    }

    if (!this.state.visible) {
      return this.startTimer()
    }

    // Timer is already rendered. Reset prev timer + start new timer for 5 sec

    console.log('update timer')

    const timerId = this.state.timerId
    clearTimeout(timerId)
    this.startTimer()
  }

  render() {
    const {firstName, lastName, age} = this.props
    const {visible} = this.state

    if (!visible || (!firstName && !lastName && !lastName)) {
      return null
    }

    const formattedName = `${firstName} ${lastName}`

    return (
      <>
        <h2>Component 2:</h2>
        <div>{formattedName}</div>
        <div>{age}</div>
      </>
    )
  }
}

export default Component2
