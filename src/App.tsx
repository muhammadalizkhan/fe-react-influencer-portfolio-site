import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import Services from './components/services'
import WhoWeAre from './components/who-we-are'

function App() {

  return (
   <div className="bg-black">
      <Header />
      <Hero />
      <Services />
      <WhoWeAre />
    </div>
  )
}

export default App
