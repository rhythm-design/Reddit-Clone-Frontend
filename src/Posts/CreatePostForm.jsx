import "./CreatePost.css"

const CreatePostForm = () => {
    const dropboxCommunity = {
        dropdownContainer: {
            position: 'relative',
        },
        communityDropdown: {
            display: 'none',
            position: 'absolute',
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
                <input
                    style={dropboxCommunity.dropdownInput}
                    type="text"
                    placeholder="Search for communities"
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
                    {/* Add more communities as needed */}
                </div>

                <div className="headings">
                    <h2> &nbsp; Create Reddit Post </h2>
                    <h2> &nbsp; Upload Image </h2>
                    <h2> &nbsp; Upload Link  </h2>
                </div>

                <input type="text" name="postTitle" onChange={(e) => setPostTitle(e.target.value)} placeholder="Post Title..." />
                <input type="text" name="postContent" onChange={(e) => setPostContent(e.target.value)} placeholder="Post Content" />
                <input type="url" name="imageUrl" onChange={(e) => setPostUrl(e.target.value)} placeholder="Post URL..." />

                <button type="submit" onClick={(e) => getRequestServer(e)}> Register..</button>
            </form>
        </main>
    )
}

export default CreatePostForm