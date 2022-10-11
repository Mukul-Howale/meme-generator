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

    /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    // Above fn can also be written as below if async keyword is used:

    // useEffect(() =>{
    //     async function get_memes(){
    //         const res = await fetch("https://api.imgflip.com/get_memes");
    //         const data = await res.json();
    //         setAllMemes(data.data.memes)
    //     }

    //     get_memes();
    // }, [])

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