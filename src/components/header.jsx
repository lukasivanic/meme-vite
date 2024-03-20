import React from "react";
import Trollface from "../imgs/troll-face-png-1.png";

function Header(){
    return(
        <header>
            <div className="head-class">
                <img src={Trollface} alt="" />
                <h1>Meme Generator</h1>
            </div>
            <span>React Course - Project 3</span>
        </header>
    )
}

export default Header