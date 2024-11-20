import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as fullStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as emptyStar} from '@fortawesome/free-regular-svg-icons';
import {faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
//  @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
function Team({ image, Name, League, stars, team_Ratings}) {
    return (
        <div className="team-container">
            <div key={image}>
                <img className="team-logo" src={image} alt={`${Name} logo`} />
                <h2 className="team-name">{Name}</h2>
                <p className="league">League: {League}</p>
                <div className="stars">
                {

                    // this will be rendered as list of divs
                    stars?.map((star,index)=>{
                        if(star === 10){
                            return (
                                <div key={index} ><FontAwesomeIcon icon={fullStar}/></div>
                            );
                        }else if(star === 5){
                            return (
                                <div key={index} ><FontAwesomeIcon icon= {faStarHalfAlt}/></div>
                            );
                        }else{
                            return (
                                <div key={index} ><FontAwesomeIcon icon={emptyStar}/></div>
                            );
                        }
                    })
                    
                }
                </div>
                <div className="ratings">
                    <div>{team_Ratings?.ATT}</div>
                    <div>{team_Ratings?.MID}</div>
                    <div>{team_Ratings?.DEF}</div>
                    <div>{team_Ratings?.OVR}</div>
                </div>
            </div>
        </div>
    )
}

export default Team;