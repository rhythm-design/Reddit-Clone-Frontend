import "./CreatePost.css"


const CreatePost = () => {
    return (
        <>
            <div class="flex border border-grey-light-alt hover:border-grey rounded bg-white cursor-pointer mb-5">

                <div className="CreatePostSection">

                    <h2>  &nbsp; <i className="fa-brands fa-reddit"></i> reddit </h2>

                    <input placeholder="Create Post" onClick={() => navigate("/submit")} />
                    <div className='createPostOptions'>
                        <a><i className="fa-solid fa-image"></i></a>
                        <a><i className="fa-solid fa-link"></i></a>
                    </div>
                </div>


            </div>
        </>
    )
}

export default CreatePost;