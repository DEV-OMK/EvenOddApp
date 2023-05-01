// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  increment = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({number: prevState.number + randomNumber}))
  }

  checkEvenOdd = () => {
    const {number} = this.state
    if (number % 2 === 0) {
      return <p className="description">Count is Even</p>
    }
    return <p className="description">Count is Odd</p>
  }

  render() {
    const {number} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Count {number}</h1>
          {this.checkEvenOdd()}
          <button type="button" className="button" onClick={this.increment}>
            Increment
          </button>
          <p className="caption">
            <sup>*</sup>Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
