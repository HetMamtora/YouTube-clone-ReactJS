import React from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Search from './pages/Search'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App