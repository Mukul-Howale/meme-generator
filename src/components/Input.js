import {React, useEffect, useState} from "react";
// import MemesData from "../memesData";
import Output from './Output';
import "../styles/Input.css";

export default function Input(){
    const [memeData, setMemeData] = useState({
        randomImage : "http://i.imgflip.com/1bij.jpg",
        topText : "",
        bottomText : ""
    });

    const [allMemes, setAllMemes] = useState();

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    let setOutput = (
        <Output
            topText = {memeData.topText}
            bottomText = {memeData.bottomText}
            meme = {memeData.randomImage}
        />
    )

    function getMeme(){
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        setMemeData((prevMemeData) => {
            prevMemeData.randomImage = allMemes[randomNumber].url;
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