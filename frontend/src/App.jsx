import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './components/Team'
import  teams  from "./teams_data.json";
function App() {
  const [homeTeam, setHomeTeam] = useState({})
  const [awayTeam, setAwayTeam] = useState({});

  const drawTeams = () => {
    const rnd1 = randomNumber();
    setHomeTeam(teams[rnd1]);
    const rnd2 = randomNumber();
    setAwayTeam(teams[rnd2]);
  }

  const randomNumber =()=>{
    return Math.floor(Math.random()*teams.length);
  }

  return (
    <div className='container'>
      <div className="team-selection-container">
        <h3> SELECT TEAMS </h3>
        <div className="team-selection">
          <div>
          <h3>Home</h3>
          <Team 
          image = {homeTeam.image} 
          Name = {homeTeam.Name} 
          League ={homeTeam.League}
          stars = {homeTeam.stars}
          team_Ratings = {homeTeam?.team_Ratings}
          />
          </div>

          <div>
          <h3>Away</h3>
          <Team 
          image= {awayTeam.image} 
          Name={awayTeam.Name} 
          League={awayTeam.League}
          stars = {homeTeam.stars}
          team_Ratings = {awayTeam?.team_Ratings}
          />
          </div>
        </div>
        <button onClick={drawTeams}> Draw </button>
      </div>
    </div>
  )
}

export default App
