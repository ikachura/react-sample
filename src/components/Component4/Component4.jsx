import React from 'react'
import {connect} from 'react-redux'

import {addValue} from '../../actions/addValue'
import {onSubmit} from '../../actions/onSubmit'

class Component4 extends React.Component {
  handleClick = () => {
    this.props.addValue()
  }

  handleChange = () => {
    this.props.onSubmit('Igor', 'lastName', 10)
  }

  render() {
    console.log('(render) _______4')

    return (
      <>
        <button onClick={this.handleClick}>Increment</button>
        <div>Value: {this.props.value_1}</div>

        <input type="text" onChange={this.handleChange} />
      </>
    )
  }
}

// connect -> props -> Component4

// connect = React + Redux

const Component4Container = connect(
  (state) => ({
    value_1: state.counterReducer,
    form: state.formReducer,
  }),
  {
    addValue,
    onSubmit,
  },
)(Component4)

export default Component4Container

// export default Component4
