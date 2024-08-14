// Write your code here
import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} = matchData
    const lostorWon = matchStatus === 'Won' ? 'green' : 'red'
    return (
      <>
        <li className="match-card">
          <img
            className="match-card-logo"
            src={competingTeamLogo}
            alt={`competing team ${competingTeam}`}
          />
          <p className="name-color">{competingTeam}</p>
          <p className="name-color">{result}</p>
          <p className={lostorWon}>{matchStatus}</p>
        </li>
      </>
    )
  }
}

export default MatchCard
