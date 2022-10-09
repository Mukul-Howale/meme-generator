import React from "react";
import "../styles/Output.css";

export default function Output(props){
    return(
        <div className="output">
            <img className="meme-img" alt="Meme" src={props.meme}></img>
            <p id="top" className="top-text text">{props.topText}</p>
            <p id="bottom" className="bottom-text text">{props.bottomText}</p>
        </div>
    )
}