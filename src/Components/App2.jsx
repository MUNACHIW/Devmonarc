// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header.jsx'
import Bio from './Bio.jsx'
import Techstack from './TechStack.jsx'
import Work from './Work.jsx'
import Section from './Section.jsx'
import Deal from './Deal.jsx'
import Bookreact from './Bookreact.jsx'
import AOS from 'aos';
import Tutorship from './Tutorship.jsx'
import Footer from './Footer.jsx'
AOS.init()

function App2(){

return(<>
        <Header/>
        <Bio/>
        <Techstack/>
        <Work/>
        <Section/>
        <Deal/>
        <Tutorship/>
        <Bookreact/>
        <Footer/>
</>)
}
export default App2
