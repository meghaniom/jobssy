
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Applyjob from './pages/Applyjob'
import Application from './pages/Application'
import RecruiterLogin from './component/RecruiterLogin'
import { useContext } from 'react'
import { Appcontext } from './context/Appcontext'

function App() {
  const {showRecruiterLogin} = useContext(Appcontext)
  return (
    <>
    <div>
      { showRecruiterLogin && <RecruiterLogin/>}
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
