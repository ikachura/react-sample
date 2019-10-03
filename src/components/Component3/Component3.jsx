import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  age: PropTypes.string,
  onCreditCardChange: PropTypes.func.isRequired,
}

const defaultProps = {
  age: '',
}

class Component3 extends React.Component {
  state = {
    creditCardType: '',
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.age === this.props.age) {
      return
    }

    const creditCardType = this.props.age < 20 ? 'Visa' : 'MasterCard'

    this.setState({creditCardType})
    this.props.onCreditCardChange(creditCardType)
  }

  render() {
    const {creditCardType} = this.state

    console.log('(render) Component3')

    return <div>{creditCardType}</div>
  }
}

Component3.propTypes = propTypes
Component3.defaultProps = defaultProps

export default Component3
