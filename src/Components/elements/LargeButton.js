import React from 'react'
import './largebutton.css'

const LargeButton = ({style, text}) => {
  return (
    <div className = "button button-large" style = {style} >
        {text}
    </div>
  )
}

export default LargeButton