import React from 'react'
import './sectionfive.css'
import Content from '../elements/Content'

const SectionFive = () => {
  return (
    <>
    <div className = "section-five">
    <Content
        heading = "Track your period"
        description = "Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data."
        buttonStyles = {{
          background: 'linear-gradient(297.28deg, #F66E6E 67.01%, rgba(246, 110, 110, 0) 123.71%)',
          filter: 'drop-shadow(0px 2px 6px rgba(255, 22, 64, 0.33))',
          color: 'white',
          fontSize: 19.68
        }}
        buttonText = "Track your period on the app"
    />        
    </div>
    <img className="menstrual-calendar" alt="" src= {require("../../assets/images/menstrual-calendar.png")} />
    </>
  )
}

export default SectionFive