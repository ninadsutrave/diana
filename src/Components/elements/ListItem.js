import React from 'react'
import './listitem.css'

const ListItem = ({item}) => {
  return (
    <li>
        <h5>{item}</h5>
        <img className="menstrual-calendar" alt="" src= {require("../../assets/icons/chevron-right-small.png")} />
    </li>
  )
}

export default ListItem