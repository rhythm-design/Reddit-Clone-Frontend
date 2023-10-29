import { useEffect } from "react";
import "./CreatePost.css"

import { useState } from "react";

const CreatePostForm = () => {
    const [formType, setFormType] = useState("default")

    useEffect(()=>{
        console.log("reload...")
    }, [formType])

    const dropboxCommunity = {
        dropdownContainer: {
            position: 'relative',
            // display : "block"
        },
        communityDropdown: {
            display: 'none',
            position: 'absolute',
            flexDirection  :"column",
            backgroundColor: '#f9f9f9',
            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
            minWidth: '160px',
            zIndex: '1',
        },
        communityDropdownLink: {
            padding: '12px 16px',
            textDecoration: 'none',
            display: 'block',
        },
        dropdownInputFocus: {
            display: 'block',
        },
    };




    return (
        <main>
            <form>
                <h1>Create Post...</h1>

                <input
                    style={dropboxCommunity.dropdownInput}
                    type="dropbox"
                    placeholder="Choose a community &nbsp; &nbsp; v"
                    id = "communitiesDropbox"
                />
                <div style={dropboxCommunity.communityDropdown}>
                    <a style={dropboxCommunity.communityDropdownLink} href="#">
                        Community 1
                    </a>
                    <a style={dropboxCommunity.communityDropdownLink} href="#">
                        Community 2
                    </a>
                    <a style={dropboxCommunity.communityDropdownLink} href="#">
                        Community 3
                    </a>
                </div>

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
                            <input type="url" name="imageUrl" onChange={(e) => setPostUrl(e.target.value)} placeholder="Post URL..." />
                        </>
                        :
                        (formType === 'image')
                            ?
                            <>
                                <input type="file" name="image" />
                            </>
                            :
                            <>
                                <input type="url" name="link" placeholder="enter link" />
                            </>
                }

                <button type="submit" onClick={(e) => getRequestServer(e)}> Register..</button>
            </form>
        </main>
    )
}

export default CreatePostForm