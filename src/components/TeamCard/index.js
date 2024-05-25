// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {listOfCards} = this.props
    const {name, id, teamImageUrl} = listOfCards
    return (
      <Link to={`/team-matches/${id}`}>
        <li className="app">
          <img src={teamImageUrl} className="team-logo" alt={`${name}`} />
          <p className="heading">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
