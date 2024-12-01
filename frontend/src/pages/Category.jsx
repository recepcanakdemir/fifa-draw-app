import React from 'react';
import "../style/Category.css"

function Category(){

    return (
        
        <div className="container">
            <img className="category-image" src="" alt="" />
            <div className="title">
                Title
            </div>
            <div className="teams">
                <div>
                    t1
                </div>
                <div>
                    t2
                </div>
                <div>
                    t3
                </div>
                <div>
                    t4
                </div>
            </div>
            <div className="desc">
                Description
            </div>
        </div>
    );
}

export default Category;