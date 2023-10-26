// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Header from './components/Header'
import Main from './components/Main'
import Register from './Auth/Register'
import Login from './Auth/Login'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
                     <Header/>
                      <Main/>
                      </>
                    }
          />
          <Route path="/login" element={<><Login/></>}/>
          <Route path="/register" element={<><Register/></>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
