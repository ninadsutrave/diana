import React from 'react'
import './sectiontwo.css';
import TextContent from '../elements/TextContent'

const SectionTwo = () => {
  return (
    <div className="section-two">
      <TextContent 
          style = {{
            fontSize: '22px',
            color: '#1B1B50'
          }}
          text = "What makes us different?"
      />

      <TextContent 
          style = {{
            fontSize: '32px',
            color: '#1B1B50'
          }}
          text = "Reimagining and rewiring self-care"
      />

      <TextContent 
          style = {{
            fontSize: '14px',
            color: '#1B1B50'
          }}
          text = "You care about conscious consumption, and so do we."
      />

      <TextContent 
          style = {{
            fontSize: '14px',
            color: '#1B1B50'
          }}
          text = "When it comes to your health, “good enough” is not good enough. We’re here to flip the script on that narrative because you deserve the best"
      />

      <TextContent 
          style = {{
            fontSize: '14px',
            color: '#1B1B50'
          }}
          text = "We collaborate with researchers and doctors to"
      />

      <ul>
        <li>
          <TextContent 
            style = {{
              fontSize: '14px',
              color: '#1B1B50'
            }}
            text = "Help you get granular about your health and self-care with personalized insights, and"
          />
        </li>
        <li>
          <TextContent 
            style = {{
              fontSize: '14px',
              color: '#1B1B50'
            }}
            text = "Equip you with simple, sustainable products that get the job done"
          />
        </li>
      </ul>

      <TextContent 
        style = {{
          fontSize: '14px',
          color: '#1B1B50'
        }}
        text = "No to-the-moon-and-back claims in this neck of the woods."
      />

      <TextContent 
        style = {{
          fontSize: '14px',
          color: '#1B1B50'
        }}
        text = "We’re just solving real problems for real people here. "
      />
        
    </div>
  )
}

export default SectionTwo