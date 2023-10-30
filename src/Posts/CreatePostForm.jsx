import { useEffect } from "react";
import "./CreatePost.css"

import { useState } from "react";
import CommunitiesDropdown from "./CommunitiesDropdown";

const CreatePostForm = () => {
    const [formType, setFormType] = useState("default")




    useEffect(() => {
        console.log("reload...")
    }, [formType])

    




    return (
        <main>
            <CommunitiesDropdown/>
            <form>
                <h1>Create Post...</h1>

                <div className="headings">
                    <h2 onClick={() => setFormType("default")}> &nbsp; Post </h2>
                    <h2 onClick={() => setFormType("image")}> &nbsp; Upload Image </h2>
                    <h2 onClick={() => setFormType("link")}> &nbsp; Upload Link  </h2>
                </div>

                <input type="text" name="postTitle" onChange={(e) => setPostTitle(e.target.value)} placeholder="Post Title..." />
                {
                    (formType === 'default')
                        ?
                        <>
                            <input type="text" name="postContent" onChange={(e) => setPostContent(e.target.value)} placeholder="Post Content" />
                            
                        </>
                        :
                        (formType === 'image')
                            ?
                            <>
                                <input type="file" name="image" />
                            </>
                            :
                            <>
                                <input type="url" name="imageUrl" onChange={(e) => setPostUrl(e.target.value)} placeholder="Post URL..."/>
                            </>
                }

                <button type="submit" onClick={(e) => getRequestServer(e)}> Register..</button>
            </form>
        </main>
    )
}

export default CreatePostForm