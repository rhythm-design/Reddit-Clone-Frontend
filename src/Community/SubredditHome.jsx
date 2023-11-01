// import "./Home.css"

import Header from "../Home/Header";
import PostOptions from "../Home/PostOptions";
import PostModal from "../Home/PostModal";
import SubredditPage from "./SubredditPage";
import SubredditRightSection from "./SubredditRightSection";
import LeftSection from "../Home/LeftSection";
const SubredditHome = () => {
    return (
        <>
            <div class="flex bg-blue-lightest flex flex-col font-sans min-h-screen">
                <Header />
                <div class="mt-4">
                    <PostOptions />
                    <div class="container mx-auto">
                        <div class="flex w-960 mx-auto">
                            <LeftSection />
                            <div class="w-2/3 m-3">
                                <div class="py-2">
                                    <SubredditPage />
                                </div>
                            </div>
                            <SubredditRightSection />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubredditHome;