import React from 'react'
import '../ComponentStyles/topbar.css'

function topbar() {
  return (
    <div className="top-bar">
        <img alt="" src={require("../assets/icons/shopping-cart.png")}></img>
    </div>
  )
}

export default topbar