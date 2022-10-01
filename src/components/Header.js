import React from "react";
import "../styles/Header.css";
import troll_face from "../images/troll_face.png";

export default function Header(){
    return(
        <div className="header gradient">
            <img src={troll_face} alt="Troll Face"></img>
            <p className="title-1 text-color-wh font-famaily-karla">Meme Generator</p>
            <p className="title-2 text-color-wh font-famaily-inter">React Course - Project 3</p>
        </div>
    )
}