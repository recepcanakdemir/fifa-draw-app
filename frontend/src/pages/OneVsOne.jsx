import { useState } from 'react';
import '../style/OneVsOne.css';
import Team from '../components/Team';
import  teams  from "../teams_data.json";
import { useNavigate } from 'react-router-dom';

function OneVsOne() {
  const [homeTeam, setHomeTeam] = useState(teams[0])
  const [awayTeam, setAwayTeam] = useState(teams[1])
  const navigate = useNavigate();

  const drawTeams = () => {
    const rnd1 = randomNumber();
    setHomeTeam(teams[rnd1]);
    const rnd2 = randomNumber();
    setAwayTeam(teams[rnd2]);
  }
  const handleClickButton = (path) =>{
    navigate(path)
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

          <div className="versus">
            <h3>VS</h3>
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
        <button onClick={()=> handleClickButton('/')}>Main Page</button>
      </div>
    </div>
  )
}

export default OneVsOne; 
