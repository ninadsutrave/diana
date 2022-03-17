import React from 'react'
import './sectionthree.css'
import Content from '../elements/Content'
import TextContent from '../elements/TextContent'

const SectionThree = () => {
  return (
    <>
    <div className = "section-three">
        <TextContent 
          style = {{
            fontSize: '22px',
            color: '#1B1B50'
          }}
          text = "Liberate your everyday wellness"
        />
        <Content 
          heading = "Shop our self-care products"
          description = "Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get."
          buttonText = "Upgrade your self-care"
          buttonStyles = {{
            background: 'linear-gradient(297.28deg, #F66E6E 67.01%, rgba(246, 110, 110, 0) 123.71%)',
            filter: 'drop-shadow(0px 2px 6px rgba(255, 22, 64, 0.33))',
            color: 'white',
            fontSize: '19.8605px'
          }}
        />
        <TextContent 
          style = {{
            fontSize: '22px',
            textAlign: 'center'
          }}
          text = '#NoNasties, we promise!'
        />
       

    </div>
    <img className="self-care-product" alt="" src= {require("../../assets/images/self-care-product.png")} />
    </>
  )
}

export default SectionThree