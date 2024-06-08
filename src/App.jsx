import { Route, Routes } from 'react-router-dom'
import './App.scss'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className='App'>
     <div className='wrapper'>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
  </div>
  )
}

export default App
