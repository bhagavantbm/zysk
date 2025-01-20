import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar'
// import Signup from './SignupPage'
// import './index.css'
// import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    {/* <Signup/> */}
  </StrictMode>,
)

