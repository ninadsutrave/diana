import React from 'react'
import './SectionFour.css'
import Content from '../elements/Content'

const SectionFour = () => {
  return (
    <div className = "section-four">
        <Content
          heading = "Track your mood"
          description = "All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day."
          buttonStyles = {{
            background: 'linear-gradient(288.62deg, #6E8CF6 42.36%, rgba(110, 213, 246, 0.93) 115.74%)',
            boxShadow: '0px 2px 16px rgba(71, 222, 255, 0.33)',
            color: 'white',
            fontSize: 19.68
          }}
        buttonText = "Track you mood on the app"
    /> 
     <div className="image-grid">
          <img alt="" src={require('../../assets/images/mood1.png')} />
          <img alt="" src={require('../../assets/images/mood2.png')} />
          <img alt="" src={require('../../assets/images/mood3.png')} />
          <img alt="" src={require('../../assets/images/mood4.png')} />
        </div>
    </div>
  )
}

export default SectionFour