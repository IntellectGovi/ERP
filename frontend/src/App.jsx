import './App.css'
import LoginPage from '../pages/Login/LoginPage'
import { Route, Routes, Link, useLocation } from "react-router-dom"
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
