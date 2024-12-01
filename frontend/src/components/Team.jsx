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
                <p className="league">{League}</p>
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

                    <div className="rating-item">
                        <div className="rating-title">
                            ATT
                        </div>
                        <div className="rating-box">{team_Ratings?.ATT}</div>
                    </div>

                    <div className="rating-item">
                        <div className="rating-title">
                            MID
                        </div>
                        <div className="rating-box"> {team_Ratings?.MID}</div>
                    </div>


                    <div className="rating-item">
                        <div className="rating-title">
                            DEF
                        </div>
                       <div className="rating-box">{team_Ratings?.DEF}</div> 
                    </div>

                    <div className="rating-item">
                        <div className="rating-title">
                            OVR
                        </div>
                        <div className="rating-box">{team_Ratings?.OVR}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;