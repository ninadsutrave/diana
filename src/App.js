import './App.css';
import React from 'react'

//importing components
import Topbar from './Components/Topbar'
import Section from './Components/Section'

/*
First Section: 1725px
Second Section: 841px
Third Section: 411px
Fourth Section: 562px
Fifth Section: 341px + 431px
*/

const App = () => {
  return (
    <>
    <Topbar />
    <Section className="one" />
    <Section className="two" />
    <Section className="three" />
    <Section className="four" />
    <Section className="five" />
    </>
  )
}

export default App


