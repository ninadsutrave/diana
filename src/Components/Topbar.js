import React from 'react'
import '../ComponentStyles/topbar.css'

const topbar = () => {
  return (
    <div className="top-bar">
      <img className="icon menu-icon" alt="" src={require("../assets/icons/menu.png")}></img>
      <div className="float-right">
        <img className="icon shopping-cart-icon" alt="" src={require("../assets/icons/shopping-cart.png")}></img>
        <img className="icon bell-icon" alt="" src={require("../assets/icons/bell.png")}></img>
      </div>
    </div>
  )
}

export default topbar