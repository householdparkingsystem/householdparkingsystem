import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import Location from './components/Location'
import DisplaySpots from './components/DisplaySpots'
import { BrowserRouter as Router,Route, Link, Routes}  from 'react-router-dom'
import SelectionPage from './components/SelectionPage'
import Post from './components/Post'
import Display from './components/Display'
import NavigationBar from './components/NavigationBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <div className='mx-auto container justify-center items-center bg-black'>
      <nav className='flex justify-end items-end bg-black mr-12'>
        {/* <NavigationBar /> */}
        
        <ul className='flex flex-row gap-3 text-white bg-black mt-3'>
          {/* <li>
            <Link to='/'>Login</Link>
          </li> */}
          {/* <li>
            <Link to='/signup'>Sign Up</Link>
          </li> */}
          {/* <li>
            <Link to='/selection'>Selection</Link>
          </li> */}
          {/* <li>
            <Link to='/location'>Location</Link>
          </li> */}
          {/* <li>
            <Link to='/display/+location'>Display</Link>
          </li> */}
          {/* <li>
            <Link to='/'>Logout</Link>
          </li> */}

        </ul>
      </nav>
      <Routes>
        <Route path="/" Component={LoginPage}/>
        <Route path="/signup" Component={SignupPage}/>
        {/* <Route path="/selection" Component={SelectionPage}/> */}
        {/* <Route path="/location" Component={Location}/> */}
        <Route path='/selection' Component={SelectionPage} />
        <Route path='/request' Component={Location}/>
        <Route path='/post' Component={Post}/>
        <Route path='/display/:location' element={<DisplaySpots />}/>
        <Route path='/' Component={LoginPage}/>
        <Route path='/preview/:houseid' element={<Display/>}/>
      </Routes>
    </div>
  </Router>
    </>
  )
  
}

export default App
