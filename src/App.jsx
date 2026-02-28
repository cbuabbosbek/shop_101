import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } ></Route>
        <Route path='/about' element={ <About /> } ></Route>
        <Route path='/shop' element={ <Shop /> } ></Route>
      </Routes>

      <br />
      <hr />
      <h1>Footer</h1>
    </>
  )
}

export default App
