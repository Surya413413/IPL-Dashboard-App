// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamCardList: [], isLoader: true}

  componentDidMount() {
    this.getteamList()
  }

  getteamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formateData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamCardList: formateData, isLoader: false})
  }

  render() {
    const {teamCardList, isLoader} = this.state
    return (
      <div className="app-container">
        <div className="img-ipl-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-log-style"
          />
          <h1 className="ipl-dashboard-heading">IPL DashBoard</h1>
        </div>
        <ul className="loader-data-container">
          {isLoader ? (
            <div data-testid="loader">
              <Loader type="TailSpan" color="#00BFFF" height={50} weight={50} />
            </div>
          ) : (
            teamCardList.map(each => (
              <TeamCard listOfCards={each} key={each.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}
export default Home
