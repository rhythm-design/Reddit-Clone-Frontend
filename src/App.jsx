import './App.css'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './Home/Home'
import CreatePostPage from './Posts/CreatePostPage'
import CreateSubredditPage from './Subreddit/CreateSubredditPage'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Header from './Home/Header'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <BrowserRouter>
        {/* <ToastContainer position="bottom-right" /> */}
        <Routes>
          <Route path="/" element={<><Home/></>} />
          <Route path="/submit" element={<><CreatePostPage/></>} />
          <Route path="/create/community" element={<><CreateSubredditPage/></>} />
          <Route path="/login" element={<><Header showHeaderOptions={false}/><Login/></>}/>
          <Route path="/register" element={<><Header showHeaderOptions={false}/><Register/></>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
