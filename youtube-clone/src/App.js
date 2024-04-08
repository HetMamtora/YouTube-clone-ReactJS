import React from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Search from './pages/Search'
import Watch from './pages/Watch'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/watch/:id' element={<Watch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App