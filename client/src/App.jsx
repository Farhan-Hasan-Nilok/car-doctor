
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Pages/shared/footer/Footer'
import Navbar from './Pages/shared/navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
