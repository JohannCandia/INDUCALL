import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Contact from './components/Contact'
// import Maintance from './components/maintance'
function App() {

  return (
    <>
    
    
        <Navbar />
        <div id="Inicio">
          <Hero />
        </div>
        <div id="SobreNosotros">
          <Cards />
        </div>
        <div id="Contacto">
          <Contact />
        </div>
      

    </>
  )
}

export default App
