import React from 'react'
import './icon.css'

const Icon = ({imgSource}) => {
  return (
    <img className="icon" alt="" src={require(imgSource)} />
  )
}

export default Icon





