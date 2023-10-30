import './App.css'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './Home/Home'
import CreatePostPage from './Posts/CreatePostPage'
import CreateSubredditPage from './Subreddit/CreateSubredditPage'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Home/></>} />
          <Route path="/submit" element={<><CreatePostPage/></>} />
          <Route path="/create/community" element={<><CreateSubredditPage/></>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
