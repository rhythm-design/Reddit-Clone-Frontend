import './App.css'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './Home/Home'
import CreatePostPage from './Posts/CreatePostPage'
import CreateSubredditPage from './Subreddit/CreateSubredditPage'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Header from './Home/Header'
import SearchPost from './Posts/SearchPost'
import FilterPost from './Posts/FilterPost'
import CategorySearch from './Posts/CategorySearch'
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
          <Route path="/search" element={<><SearchPost/></>} />
          <Route path="/filter" element={<><FilterPost/></>} />
          <Route path="/category" element={<><CategorySearch/></>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
