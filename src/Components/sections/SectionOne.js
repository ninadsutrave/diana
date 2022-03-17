import React from 'react'
import TextContent from '../elements/TextContent'
import './SectionOne.css'
import Divider from '../elements/Divider'

const SectionOne = () => {
  return (
    <div className="section-one">

      <TextContent
        style ={{
          fontSize: '33px'          
        }}
        text = "About Diana"
      />

      <TextContent
        style ={{
          fontSize: '18px'
        }}
        text = "A platform that looks out for you" 
      />  

      <div className="align-left">
      <TextContent
        style ={{
          fontSize: '14px'
        }}
        text = "Diana empowers you to understand how your body works so you can look and feel your best." 
      />   
      </div>

      <Divider
        style = {{
          width: '297px',
          border: '0.5px solid black'
        }}
      />

      <TextContent
        style ={{
          fontSize: '22px'
        }}
        text = "Our Philosophy" 
      /> 

      <TextContent
        style ={{
          fontSize: '33px'
        }}
        text = "Sustainable wellness is a big-picture, inside out approach" 
      />  

      <TextContent
        style ={{
          fontSize: '16px'
        }}
        text = "Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness." 
      />    
        
      <TextContent
        style ={{
          fontSize: '16px'
        }}
        text = "That’s why we’ve created an integrated ecosystem of:" 
      />

      <TextContent
        style ={{
          fontSize: '16px'
        }}
        text = "That’s why we’ve created an integrated ecosystem of:" 
      />

      <img alt="" src = {require('../../assets/icons/result.png')} />
            
      <TextContent
        style ={{
          fontSize: '16px'
        }}
        text = "Consciously formulated products that deliver feel-good results fast " 
      />

      <img alt="" src = {require('../../assets/icons/sparkle.png')} />
            
      <TextContent
        style ={{
          fontSize: '16px'
        }}
        text = "In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body" 
      />

      <img alt="" src = {require('../../assets/icons/phone-call.png')} />
            
      <TextContent
        style ={{
          fontSize: '16px'
        }}
        text = "In-app consultation portals that connect you with compassionate wellness experts" 
      />
      
    </div>
  )
}

export default SectionOne