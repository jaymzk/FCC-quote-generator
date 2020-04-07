import React from "react"


const Button = ({onClick, colour, text})=> {

    return(
        <button id="new-quote" onClick ={onClick} 
    style={{
      transition: "all 500ms",
      border: "none",
      backgroundColor: `${colour}`,
      color: "#fff",
      padding: "10px",
      borderRadius: "10px",

    }}> {text} </button>


    )


}



export default Button