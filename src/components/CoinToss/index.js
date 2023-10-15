// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    headsCount: 0,
    tailsCount: 0,
    tossResult: 'heads',
  }

  handleTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2) === 0 ? 'heads' : 'tails'

    this.setState(prevState => ({
      total: prevState.total + 1,
      tossResult,
      headsCount:
        tossResult === 'heads'
          ? prevState.headsCount + 1
          : prevState.headsCount,
      tailsCount:
        tossResult === 'tails'
          ? prevState.tailsCount + 1
          : prevState.tailsCount,
    }))
  }

  render() {
    const {total, headsCount, tailsCount, tossResult} = this.state

    return (
      <div className="bg-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>

          <div className="result">
            {tossResult === 'heads' ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
                alt="toss result"
                className="image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
                alt="toss result"
                className="image"
              />
            )}
          </div>

          <button
            type="button"
            onClick={this.handleTossCoin}
            className="button"
          >
            Toss Coin
          </button>
          <div className="counts">
            <p className="para">Total: {total}</p>
            <p className="para">Heads: {headsCount}</p>
            <p className="para">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
