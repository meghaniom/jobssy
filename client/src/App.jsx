
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Applyjob from './pages/Applyjob'
import Application from './pages/Application'

function App() {
  return (
    <>
    <div>
      <Routes>
         <Route path='/' element={<Homepage/>} />
         <Route path='/job/:id' element={<Applyjob/>} />
         <Route path='/application' element={<Application/>} />
      </Routes>
    </div>
    </>
  )
}
export default App
