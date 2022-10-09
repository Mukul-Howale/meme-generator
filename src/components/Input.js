import {React, useState} from "react";
import MemesData from "../memesData";
import Output from './Output';
import "../styles/Input.css";

export default function Input(){
    const [memeData, setMemeData] = useState({
        randomImage : "http://i.imgflip.com/1bij.jpg",
        topText : "",
        bottomText : ""
    });

    let setOutput = (
        <Output
            topText = {memeData.topText}
            bottomText = {memeData.bottomText}
            meme = {memeData.randomImage}
        />
    )

    console.log(memeData);

    function getMeme(){
        const randomNumber = Math.floor(Math.random() * MemesData.data.memes.length);
        setMemeData((prevMemeData) => {
            prevMemeData.randomImage = MemesData.data.memes[randomNumber].url;
            return {...prevMemeData}
        })
    }

    function handleChange(event){
        const{name, value} = event.target
        setMemeData((preValue) => {
            return {
                ...preValue,
                [name] : value
            }
        })
    }

    return (
        <div>
            <div className="input-elements">
                <input 
                    name="topText"
                    type="textbox" 
                    id="top-input" 
                    className="input-box font-famaily-karla" 
                    placeholder="Top text goes here"
                    onChange={handleChange}
                    />
                <input 
                    name="bottomText"
                    type="textbox" 
                    id="bottom-input" 
                    className="input-box font-famaily-karla" 
                    placeholder="Bottom text goes here"
                    onChange={handleChange}
                    />
            </div>
            <button onClick={getMeme} className="generate gradient">
                <p className="text-color-wh font-famaily-karla">Get a new meme image</p>
            </button>
            {setOutput}
        </div>
    )
}