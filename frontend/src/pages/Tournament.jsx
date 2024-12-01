import React from 'react'
import Category from './Category';
import '../style/Tournament.css';

function Tournament(){
    return(
        <div>
            <div className="cat-container">
                <p>tournaments</p>
                <Category className="category"/>
                <Category className="category"/>
                <Category className="category"/>
                <Category className="category"/>
                <Category className="category"/>
                <Category className="category"/>
                <Category className="category"/>
            </div>
        </div>
    );
}

export default Tournament;