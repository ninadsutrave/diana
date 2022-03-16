import './App.css';
import React from 'react'

//605px -> 100vh

//importing components
import Topbar from './Components/Topbar'
import Section from './Components/Section'

const App = () => {
  return (
    <>
    <Topbar />

    <Section style = {{ 
      paddingTop: '63px',
      height: '1685px', 
      background: 'linear-gradient(180deg, #FFF6FB 0%, #E7F6FC 33.33%, rgba(213, 224, 255, 0) 100%)'
    }}/>

    <Section style = {{ 
      height: '841px',
      background: 'linear-gradient(165.41deg, #D99EC9 0%, rgba(246, 240, 196, 0) 100%)'
    }}/>

    <Section style = {{ 
      height: '411px',
      background: '#DCE9E9'
    }}/>    

    <img className="self-care-product" alt="" src= {require("./assets/images/self-care-product.png")} />    

    <Section style = {{
      height: '772px',
      background: 'linear-gradient(180deg, #FFF6FB 0%, #FFFFFF 100%)'
    }}/>

    <Section style = {{
      height: '394px',
      background: 'linear-gradient(176.88deg, #F3B8BC 2.58%, #FFDAD4 93.07%)'
    }}/>

    <img className="menstrual-calendar" alt="" src= {require("./assets/images/menstrual-calendar.png")} />

    <Section style = {{
      height: '421px',
      background: 'linear-gradient(270deg, #DADAE4 0.25%, #EEEEF0 24.33%, #F8F8F8 52.08%, #FEFEFE 100%)'
    }}/>

    <img className="consultant" alt="" src= {require("./assets/images/consultant.png")} />

    <Section style = {{
      height: '646px',
      background: '#F66E6E'
    }}/>

    <Section style = {{
      height: '373px',
      background: 'linear-gradient(180deg, #FFF6FB 0%, #E7F6FC 100%)'
    }}/>

    <Section style = {{
      height: '390px',
      background: '#050506'
    }}/>

    </>
  )
}

export default App


