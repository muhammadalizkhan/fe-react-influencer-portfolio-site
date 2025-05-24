import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import Services from './components/services'
import WhoWeAre from './components/who-we-are'
import WhatWeDo from './components/what-we-do'

function App() {

  return (
   <div className="bg-black">
      <Header />
      <Hero />
      <Services />
      <WhoWeAre />
      <WhatWeDo />
    </div>
  )
}

export default App
