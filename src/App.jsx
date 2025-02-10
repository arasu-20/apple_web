import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Navbar from "./components/Navbar"
import Working from "./components/Working"

const  App = ()=> {

  return (
  <main className="bg-black">
    <Navbar/>
    <Hero/>
    <Highlights/>
    <Model/>
    <Features/>
    <Working/>
    <Footer/>
  </main>
  )
}

export default App
