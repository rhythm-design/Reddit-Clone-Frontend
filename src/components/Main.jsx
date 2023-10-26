
import postData from './../data/demoPost.json'
import { useState, useEffect } from "react"

import './../css/Main.css'

const Main = () => {

    const [postInfo, setPostInfo] = useState([])
    
    useEffect(() => setPostInfo(postData), [])

    return (
        <main>
            <div className="CreatePostSection">
                <img src="https://www.logo.wine/a/logo/Reddit/Reddit-Vertical-White-Dark-Background-Logo.wine.svg" alt="Reddit Logo">
                </img>
                <input placeholder="Create Post" />
                <div className='createPostOptions'>
                    <a><i className="fa-solid fa-image"></i></a>
                    <a><i className="fa-solid fa-link"></i></a>
                </div>
            </div>

            <section>
                <div className="PostsSection">
                    {
                        postInfo.map((post, key) => {
                            return (
                                <div key={key} className='postsSectionContainer'>
                                    <section className='votingSection'>
                                        <button ><i className="fa-solid fa-arrow-up"></i></button>
                                        {post.votes}
                                        <button><i className="fa-solid fa-arrow-down"></i></button>
                                    </section>
                                    <section className="post">
                                        <h3> {post.username} </h3>
                                        <h1 > {post.title} </h1>
                                        <h4> {post.excerpt} </h4>
                                        <img src={post.imageLink} alt="Reddit Logo">
                                        </img>

                                        <div className="postButtons">
                                            <button>Comments</button>
                                            <button>Save</button>
                                        </div>
                                    </section>
                                </div>
                            )
                        })
                    }
                </div>
            </section>



        </main>
    )
}

export default Main