import React from 'react'
import TextContent from '../elements/TextContent'
import './sectioneight.css'

const SectionEight = () => {
  return (
    <>
    <div className="section-eight">
      <div className="gradient"></div>
      <TextContent 
        style = {{
          fontSize: '33px'
        }}
        text = "With Diana, you’re in control of your health, your every day, and your story."
      />
     </div>
    </>
  )
}

export default SectionEight