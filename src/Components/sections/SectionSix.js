import React from 'react'
import './SectionSix.css'
import Content from '../elements/Content'

const SectionSix = () => {
  return (
    <>
    <div className = "section-six">
        <Content
          heading = "Consult with wellness experts"
          description = "Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you."
          buttonStyles = {{
            background: 'linear-gradient(288.62deg, #6E8CF6 42.36%, rgba(110, 213, 246, 0.93) 115.74%)',
            boxShadow: '0px 2px 16px rgba(71, 222, 255, 0.33)',
            color: 'white',
            fontSize: 19.68
          }}
          buttonText = "Get a consultation"
        />

          {/* <TextContent 
          style = {{
            fontSize: '32px'
          }}
          text = "Consult with wellness experts"
        />
        <TextContent 
          style = {{
            fontSize: '14px'
          }}
          text = "Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you."
        />
        <LargeButton 
          style = {{
            background: 'linear-gradient(288.62deg, #6E8CF6 42.36%, rgba(110, 213, 246, 0.93) 115.74%)',
            boxShadow: '0px 2px 16px rgba(71, 222, 255, 0.33)',
            color: 'white',
            fontSize: 19.68
          }}
          text = "Get a consultation"
        /> */}
    </div>
    <img className="consultant" alt="" src= {require("../../assets/images/consultant.png")} />
    </>
  )
}

export default SectionSix