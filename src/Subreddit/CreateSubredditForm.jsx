
const CreateSubredditForm = () => {
    return (
        <>
            <main>
                <form>
                    <h1>Create Subreddit...</h1>
                    <input type="text" name="postTitle" placeholder="Subreddit name...." />
                    <input type="text" name="postContent" placeholder="Subreddit" />
                    <input type="url" name="imageUrl" placeholder="Subreddit URL..." />
                    <button type="submit"> Create Subreddit..</button>
                </form>
            </main>
        </>
    )
}

export default CreateSubredditForm