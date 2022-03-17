import React from 'react'
import './mediumbutton.css'

const MediumButton = ({style, text}) => {
  return (
    <div className = "button button-medium" style = {style} >
        <h4 id="button-text">{text}</h4>
        <img className="right-icon" alt="" src={require("../../assets/icons/chevron-right-medium.png")} />
    </div>
  )
}

export default MediumButton