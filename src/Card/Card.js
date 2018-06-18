import React from 'react';
import "./Card.css";

const Card = props => (
    <img className="card" src={props.src} alt={props.name} onClick={() => props.handleClick(props.id)} />
)
export default Card;