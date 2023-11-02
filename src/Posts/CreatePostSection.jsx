import { useNavigate } from "react-router-dom";
import "./CreatePost.css"
import { SimpleDialogContainer, simpleAlert } from 'react-simple-dialogs'



const CreatePost = () => {
    const navigate = useNavigate()
    const alert = () => simpleAlert('You need to be looged in to create post')

    return (
        <>
            {
                localStorage.getItem('user') ?
                <div class="flex border border-grey-light-alt hover:border-grey rounded bg-white cursor-pointer mb-5" onClick={() =>  navigate("/submit")}>
                    <div className="CreatePostSection">
                        <h2>  &nbsp; <i className="fa-brands fa-reddit"></i> reddit </h2>
                        <input placeholder="Create Post" />
                        <div className='createPostOptions'>
                            <a  ><i className="fa-solid fa-image"></i></a>
                            <a  ><i className="fa-solid fa-link"></i></a>
                        </div>
                    </div>
                </div>

                :
                <div>
                    <SimpleDialogContainer />
                    <div class="flex border border-grey-light-alt hover:border-grey rounded bg-white cursor-pointer mb-5" onClick={alert}>
                        <div className="CreatePostSection">
                            <h2>  &nbsp; <i className="fa-brands fa-reddit"></i> reddit </h2>
                            <input placeholder="Create Post" />
                            <div className='createPostOptions'>
                                <a  ><i className="fa-solid fa-image"></i></a>
                                <a  ><i className="fa-solid fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                
            }

            
        </>
    )
}

export default CreatePost;