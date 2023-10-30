import { useEffect } from "react";
import "./CreatePost.css"

import { useState } from "react";
import CommunitiesDropdown from "./CommunitiesDropdown";
import api from "../api";
import { useNavigate } from "react-router-dom";

const CreatePostForm = () => {
    const navigate = useNavigate()
    const [formType, setFormType] = useState("default")
    const [selectedCommunity, setSelectedCommunity] = useState('')

    const [postTitle, setPostTitle] = useState('')
    const [postContent, setPostContent] = useState('')
    const [imagePost, setImagePost] = useState('')
    const [postUrl, setPostUrl] = useState('')
    const [isDraft, setIsDraft] = useState(false)

    // "isDraft" : "false",
    // "subredditId" : "1",
    // "voteCount" : "23",
    // "category" : "Sports"

    useEffect(() => {
        console.log("reload...")
        console.log(selectedCommunity)
    }, [formType])

    const submitForm =async (e) => {
        e.preventDefault()
        const requestBody = {
            postTitle: postTitle,
            postContent: postContent,
            postUrl: postUrl,
            isDraft: isDraft,
            category: "Sports",
            subredditId : "1"
        }

        

        console.log(requestBody)
        await api.post("/create", requestBody)
            .then((res)=>{ console.log(res) })
            .catch((err) => { console.log(err) })
        
        
        navigate("/")
        
    }






    return (
        <main>
            <CommunitiesDropdown selectedCommunity={selectedCommunity} setSelectedCommunity={setSelectedCommunity} />
            <form>
                <input type="hidden" name="community" value={selectedCommunity} />
                <h1>Create Post...</h1>

                <div className="headings">
                    <h2 onClick={() => setFormType("default")}> &nbsp; Post </h2>
                    <h2 onClick={() => setFormType("image")}> &nbsp; Upload Image </h2>
                    <h2 onClick={() => setFormType("link")}> &nbsp; Upload Link  </h2>
                </div>

                <input type="text" name="postTitle" onChange={(e) => setPostTitle(e.target.value)} placeholder="Post Title..." required/>
                {
                    (formType === 'default')
                        ?
                        <>
                            <input type="text" name="postContent" onChange={(e) => setPostContent(e.target.value)} placeholder="Post Content" required />

                        </>
                        :
                        (formType === 'image')
                            ?
                            <>
                                <input type="file" name="postImage" onChange={(e) => setImagePost(e.target.files[0])} required/>
                            </>
                            :
                            <>
                                <input type="url" name="imageUrl" onChange={(e) => setPostUrl(e.target.value)} placeholder="Post URL..." required/>
                            </>
                }

                <div>
                    <label>
                        <input
                            type="radio"
                            value="option1"

                            checked={isDraft}
                            onChange={() => { setIsDraft(!isDraft) }}
                        />
                        &nbsp;isDraft ?
                    </label>
                </div>


                <button type="submit" onClick={(e) => submitForm(e)}> Create Post..</button>
            </form>
        </main>
    )
}

export default CreatePostForm