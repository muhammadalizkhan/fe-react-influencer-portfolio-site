import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import Services from './components/services'
import WhoWeAre from './components/who-we-are'
import WhatWeDo from './components/what-we-do'
import Contact from './components/contact-us'
import Insights from './components/insight'
import Podcasts from './components/podcasts'
import Footer from './components/footer'

function App() {

  return (
   <div className="bg-black">
      <Header />
      <Hero />
      <Services />
      <WhoWeAre />
      <WhatWeDo />
      <Contact  />
      <Insights />
      <Podcasts />
      <Footer />
    </div>
  )
}

export default App
