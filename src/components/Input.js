import React from "react";
import "../styles/Input.css";

export default function Input(){
    return (
        <form className="form">
            <div className="input-elements">
                <input type="textbox" className="input-box font-famaily-karla" placeholder="Top text goes here"></input>
                <input type="textbox" className="input-box font-famaily-karla" placeholder="Bottom text goes here"></input>
            </div>
            <button className="generate gradient"><p className="text-color-wh font-famaily-karla">Get a new meme image</p></button>
        </form>
    )
}