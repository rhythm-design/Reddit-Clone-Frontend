import './App.css'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './Home/Home'
import CreatePostPage from './Posts/CreatePostPage'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Home/></>} />
          <Route path="/submit" element={<><CreatePostPage/></>} />
          
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
