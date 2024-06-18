
import './App.css'
import Maincontent from './layouts/Maincontent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Maincontent />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
