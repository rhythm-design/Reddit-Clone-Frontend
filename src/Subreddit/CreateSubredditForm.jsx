import { useState } from "react"
import {toast} from 'react-toastify'
import api from "../api"


const CreateSubredditForm = () => {
    const [subredditName, setSubredditName] = useState("")
    const [subredditDescription, setSubredditDescription] = useState("");
    const [subredditFlairs, setSubredditFlairs] = useState("")


    const saveSubreddit = (e) => {
        e.preventDefault()
        const subredditDetails = {
            'subredditName': subredditName,
            'subredditDescription': subredditDescription,
            'flairs': subredditFlairs 
        }

        api.post("/subreddit/create", subredditDetails).then((res) => {
            toast.success("Subreddit Created Sucessfully")
        })
        .catch((err) => toast.warn(err))

    }
    return (
        <>
            <main>
                <form>
                    <h1>Create Subreddit...</h1>
                    <input type="text" name="postTitle" placeholder="Subreddit name...." onChange={(e) => setSubredditName(e.target.value)} />
                    <input type="text" name="postContent" placeholder="Subreddit Description" onChange={(e) => setSubredditDescription(e.target.value)} />
                    <input type="url" name="imageUrl" placeholder="Flairs (Comma Seperated)" onChange={(e) => setSubredditFlairs(e.target.value)} />
                    <label>
                     Public <input type="radio" name="access" value="public" style={{height: '15px', marginRight: '15px', marginBottom: '25px'}} /> 
                     Private <input type="radio" name="access" value="private" style={{height: '15px'}} />
                     </label>
                    <button type="submit" onClick={(e) => saveSubreddit(e)}> Create Subreddit..</button>
                </form>
            </main>
        </>
    )
}

export default CreateSubredditForm