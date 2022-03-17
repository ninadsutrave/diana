import './App.css';
import React from 'react'

//605px -> 100vh

//importing components
import Topbar from './Components/Topbar'
import SectionOne from './Components/sections/SectionOne'
import SectionTwo from './Components/sections/SectionTwo'
import SectionThree from './Components/sections/SectionThree'
import SectionFour from './Components/sections/SectionFour'
import SectionFive from './Components/sections/SectionFive'
import SectionSix from './Components/sections/SectionSix'
import SectionSeven from './Components/sections/SectionSeven'
import SectionEight from './Components/sections/SectionEight'
import SectionNine from './Components/sections/SectionNine'

const App = () => {
  return (
    <>
    <Topbar />

    <SectionOne />   
    <SectionTwo /> 
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <SectionSeven />
    <SectionEight />
    <SectionNine />

    </>
  )
}

export default App