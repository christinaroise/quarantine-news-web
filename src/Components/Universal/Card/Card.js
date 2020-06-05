import React from 'react'
import './Card.css'

const Card = (props) =>{
    return(
        <div className="card">
            <div 
            className="cardIcon easyJump backgroundBlue">
                <img 
                alt={props.altTag} 
                src={props.icon}/>
            </div>
            <p className="cardTitle">{props.title}</p>
        </div>
    )
}

export default Card