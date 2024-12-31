import './index.css'
import {Component} from 'react'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {resultImg: headsImage, headsCount: 0, tailsCount: 0}

  tossTheCoin = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    const newHeadsCount = headsCount
    const newTailsCount = tailsCount
    if (tossResult === 0) {
      this.setState({
        resultImg: headsImage,
        headsCount: newHeadsCount + 1,
        tailsCount: newTailsCount,
      })
    } else {
      this.setState({
        resultImg: tailsImage,
        headsCount: newHeadsCount,
        tailsCount: newTailsCount + 1,
      })
    }
  }

  render() {
    const {resultImg, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="bg-container">
        <div className="game-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img
            src={resultImg}
            className="toss-result-image"
            alt="toss result"
          />
          <button
            type="button"
            className="toss-coin-btn"
            onClick={this.tossTheCoin}
          >
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="counts">Total:{totalCount}</p>
            <p className="counts">Heads:{headsCount}</p>
            <p className="counts">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
