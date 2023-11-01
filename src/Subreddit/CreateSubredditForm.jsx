import { useState } from "react"
// import {toast} from 'react-toastify'
import api from "../api"
import { useNavigate } from "react-router-dom"


const CreateSubredditForm = () => {
    const navigate = useNavigate()
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
        if ((subredditName.length > 15 || subredditName.length === 0) || (subredditDescription.length === 0) || subredditFlairs.length === 0) {
            const errorElement = document.getElementById('submissionError');
            errorElement.textContent = 'Ensure correct validations...';
        } else {

            api.post("/subreddit/create", subredditDetails).then((res) => {
                console.log("Subreddit Created Sucessfully", res.data)
            })
                .catch((err) => console.log(err))

            setSubredditDescription("")
            setSubredditFlairs("")
            setSubredditName("")

            navigate("/")
        }

    }
    return (
        <>
            <main>
                <form>
                    <h1 style={{display:"flex", justifyContent:"space-between",width : "50%",flexDirection: "row"}}>
                        <h2>  &nbsp; <i className="fa-brands fa-reddit"></i> reddit </h2>
                        &nbsp;
                        Create Subreddit...
                    </h1>
                    <input type="text" name="subredditName" placeholder="Subreddit name...." onChange={(e) => setSubredditName(e.target.value)}
                        onBlur={(e) => {
                            const errorElement = document.getElementById('subredditNameError');

                            if (subredditName.length === 0) {
                                errorElement.textContent = 'subreddit Name is required';
                            } else if (subredditName.length > 15) {
                                errorElement.textContent = 'subreddit Name must be 15 characters or less';
                            } else {
                                errorElement.textContent = '';
                            }
                        }}
                    />
                    <span id="subredditNameError" style={{ color: 'red' }}></span>
                    <input type="text" name="subredditDesc" placeholder="Subreddit Description" onChange={(e) => setSubredditDescription(e.target.value)} />
                    <input type="text" name="subredditFlair" placeholder="Flairs (Comma Seperated)" onChange={(e) => setSubredditFlairs(e.target.value)}

                        onBlur={(e) => {
                            const errorElement = document.getElementById('subredditFlairsError');

                            if (subredditFlairs.length === 0) {
                                errorElement.textContent = 'Atleast Add one Flair...';
                            } else {
                                errorElement.textContent = '';
                            }
                        }}
                    />
                    <span id="subredditFlairsError" style={{ color: 'red' }}></span>
                    <label>
                        Public <input type="radio" name="access" value="public" style={{ height: '15px', marginRight: '15px', marginBottom: '25px' }} />
                        Private <input type="radio" name="access" value="private" style={{ height: '15px' }} />
                    </label>
                    <button type="submit" onClick={(e) => saveSubreddit(e)}> Create Subreddit..</button>
                    <span id="submissionError" style={{ color: 'red' }}></span>
                </form>
            </main>
        </>
    )
}

export default CreateSubredditForm