import React from 'react'
import TextContent from './TextContent'
import LargeButton from './LargeButton'

function Content({heading, description, buttonText, buttonStyles}) {
  return (
    <>
    <TextContent 
          style = {{
            fontSize: '32px'
          }}
          text = {heading}
        />
        <TextContent 
          style = {{
            fontSize: '14px'
          }}
          text = {description}
        />
        <LargeButton 
          style = {buttonStyles}
          text = {buttonText}
        />
    </>
  )
}

export default Content