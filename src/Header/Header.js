import React from "react";
import "./Header.css";

const Header = props => {

    return (
        <div className="header">
            <p className="title">Memory Game</p>
            <div className="scoreDiv">
                <p>Score: {props.score}</p>
                <p>Top Score: {props.topScore}</p>
            </div>
        </div>
    )
}

export default Header;