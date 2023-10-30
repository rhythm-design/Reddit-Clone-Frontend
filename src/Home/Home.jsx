// import "./Home.css"

import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Posts from "./Posts";
import Header from "./Header";
import PostOptions from "./PostOptions";
import CreatePost from "../Posts/CreatePostSection";


const Home = () => {
    return (
        <>
            <div class="flex bg-blue-lightest flex flex-col font-sans min-h-screen">
                <Header />
                <div class="mt-4">
                    <PostOptions />
                    <div class="container mx-auto">
                        <div class="flex w-960 mx-auto">
                            <LeftSection />
                            
                            <div class="w-2/3 m-8">
                                <div class="py-2">
                                    <Posts />
                                </div>
                            </div>
                            <RightSection />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;