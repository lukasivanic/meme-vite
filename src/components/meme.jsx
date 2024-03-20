import React from "react";

function InputForm(){
    return(
        <main>
            <form className="form">
                <input 
                    type="text"
                    className="form-input"
                    placeholder="top text"
                 />
                <input 
                    type="text"
                    className="form-input"
                    placeholder="bottom text"
                 />
                <button className="button">Get a new meme image 🖼</button>    
            </form>
        </main>
    )
}
export default InputForm