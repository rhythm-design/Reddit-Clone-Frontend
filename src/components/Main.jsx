// import "./Main.css"
import postData from './../data/demoPost.json'
import { useState, useEffect } from "react"

const Main = () => {

    const [postInfo,setPostInfo] = useState([])

    useEffect(()=>setPostInfo(postData),[])

    return (
        <main>
            
            <div className="CreatePostSection"> 
                <img src="https://www.logo.wine/a/logo/Reddit/Reddit-Vertical-White-Dark-Background-Logo.wine.svg" alt="Reddit Logo">
                </img>
                <input placeholder="Create Post"/>
                <a>Upload Img</a>
                <a>Upload Link</a>
            </div>

            <section>
                <div className="PostsSection">
                    {
                        postInfo.map((post, key) => {
                            return (
                                <div key = {key} className="post">
                                    <h3> {post.username} </h3>
                                    <h1 > {post.title} </h1>
                                    <h4> {post.excerpt} </h4>
                                    <img src={post.imageLink} alt="Reddit Logo">
                                    </img>

                                    <div className="postButtons">
                                        <button>Comments</button>
                                        <button>Save</button>
                                    </div>
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