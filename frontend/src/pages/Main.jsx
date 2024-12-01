import React from "react";
import { useNavigate } from "react-router-dom";


function Main(){
    const navigate = useNavigate();
    const handleButtonClick = (path)=>{
        navigate(path);
    }



    return(
        
        <div>
            <div>

                <div>
                <button onClick={()=> handleButtonClick('one-vs-one')}>One vs One</button>
                </div>
                <button onClick={()=> handleButtonClick('tournamets')}>Tournaments</button>

            </div>
        </div>
    )
}

export default Main;