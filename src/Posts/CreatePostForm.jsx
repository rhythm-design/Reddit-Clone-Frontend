import { useEffect } from "react";
import "./CreatePost.css"

import { useState } from "react";
import CommunitiesDropdown from "./CommunitiesDropdown";
import api from "../api";
import { useNavigate } from "react-router-dom";
import CategoryDropdown from "./CategoriesDropdown";

const CreatePostForm = () => {
    const navigate = useNavigate()
    const [formType, setFormType] = useState("default")
    const [selectedCommunity, setSelectedCommunity] = useState()
    const [selectedCategory, setSelectedCategory] = useState('')

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

    const submitForm = async (e) => {
        e.preventDefault()
        if ((postTitle.length >= 200 || postTitle.length === 0) || (postContent.length >= 400 || postContent.length === 0)) {

            const errorElement = document.getElementById('submissionError');
            errorElement.textContent = 'Ensure correct validations...';

        } else if(selectedCommunity === null) {
            const errorElement = document.getElementById('submissionError');
            errorElement.textContent = 'Ensure to select community...';
        }
        else {
            const formData = new FormData();
            console.log("File is: ", imagePost)
            formData.append('post-image', imagePost);
            formData.append("postTitle", postTitle);
            formData.append('postContent', postContent);
            formData.append('postUrl', postUrl);
            formData.append('isDraft', isDraft);
            formData.append('category', selectedCategory);
            formData.append('subredditId', selectedCommunity.communityId);
            formData.append('user-email', JSON.parse(localStorage.getItem('user')).username)


            api.post('/create', formData).then((res) => console.log("Response is: ", res))
                .catch((err) => console.log("Error is: ", err));

            setPostTitle("")
            setPostContent("")
            setImagePost(null)
            setPostUrl("")
            setIsDraft(false)

            navigate("/")
            // location.reload();

        }

    }


    return (
        <main>
            <CommunitiesDropdown selectedCommunity={selectedCommunity} setSelectedCommunity={setSelectedCommunity} />

            <form>
                <input type="hidden" name="community" value={selectedCommunity} />
                <h1 style={{ display: "flex", justifyContent: "space-between", width: "50%", flexDirection: "row" }}>
                    <h2>  &nbsp; <i className="fa-brands fa-reddit"></i> reddit </h2>
                    &nbsp;
                    Create Post...
                </h1>

                <div className="headings">
                    <h2 onClick={() => setFormType("default")}> &nbsp; Post </h2>
                    <h2 onClick={() => setFormType("image")}> &nbsp; Upload Image </h2>
                    <h2 onClick={() => setFormType("link")}> &nbsp; Upload Link  </h2>
                </div>

                <input type="text" name="postTitle" onChange={(e) => setPostTitle(e.target.value)}
                    placeholder="Post Title..." required
                    onBlur={(e) => {
                        const errorElement = document.getElementById('postTitleError');

                        if (postTitle.length === 0) {
                            errorElement.textContent = 'Post Title is required';
                        } else if (postTitle.length > 200) {
                            errorElement.textContent = 'Post Title must be 200 characters or less';
                        } else {
                            errorElement.textContent = '';
                        }
                    }}
                />
                <span id="postTitleError" style={{ color: 'red' }}></span>
                {
                    (formType === 'default')
                        ?
                        <>
                            <input type="text" name="postContent" onChange={(e) => setPostContent(e.target.value)}
                                onBlur={(e) => {
                                    const errorElement = document.getElementById('postContentError');

                                    if (postContent.length === 0) {
                                        errorElement.textContent = 'Post Content is required';
                                    } else if (postContent.length > 400) {
                                        errorElement.textContent = 'Post Content must be 400 characters or less';
                                    } else {
                                        errorElement.textContent = '';
                                    }
                                }}
                                placeholder="Post Content" />
                            <span id="postContentError" style={{ color: 'red' }}></span>
                        </>
                        :
                        (formType === 'image')
                            ?
                            <>
                                <input type="file" name="postImage" onChange={(e) => setImagePost(e.target.files[0])} required />
                            </>
                            :
                            <>
                                <input type="url" name="imageUrl" onChange={(e) => setPostUrl(e.target.value)} placeholder="Post URL..." required />
                            </>
                }

                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="option1"

                            checked={isDraft}
                            onChange={() => { setIsDraft(!isDraft) }}
                        />
                        &nbsp;isDraft ?
                    </label>
                </div>

                <CategoryDropdown selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />




                <button type="submit" onClick={(e) => submitForm(e)}> Create Post..</button>
                <span id="submissionError" style={{ color: 'red' }}></span>

            </form>
        </main>
    )
}

export default CreatePostForm