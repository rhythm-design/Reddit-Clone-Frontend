import React, { useRef } from "react";
import "./PostModal.css";

const PostModal = ({ post, onClose }) => {
  const modalContentRef = useRef(null);

  const handleScroll = (e) => {
    // Check if the modal content has reached the bottom, then you can fetch more content if needed.
    if (
      modalContentRef.current.scrollHeight - modalContentRef.current.scrollTop ===
      modalContentRef.current.clientHeight
    ) {
      // Load more content or perform any other action.
    }
  };

  return (
    <div className="modal-container flex justify-content">
      <div className="modal">
        <div className="modal-content" ref={modalContentRef} onScroll={handleScroll}>
        <button onClick={onClose} className="text-xs mt-4 float-right absolute-sticky">Close</button>
          <div className="flex justify-items-center border border-grey-light-alt hover:border-grey rounded bg-white cursor-pointer mb-4">
            {/* Voting Section */}
            <div className="w-1/12 flex flex-col text-center pt-2">
              <button className="text-xs" onClick={() => handleVote(post, 1)}>
                <svg
                  className="w-5 fill-current text-grey"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10v8h6v-8h5l-8-8-8 8h5z" />
                </svg>
              </button>
              <span className="text-xs font-semibold my-1">{post.voteCount}</span>
              <button className="text-xs" onClick={() => handleVote(post, -1)}>
                <svg
                  className="w-5 fill-current text-grey"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10V2h6v8h5l-8 8-8-8h5z" />
                </svg>
              </button>
            </div>

                        {/* Main sEction */}

                        <div class="w-11/12 pt-2">
                            
                            <div class="flex items-center text-xs mb-2">
                                <a href="#" class="font-semibold no-underline hover:underline text-black flex items-center">
                                    <img class="rounded-full border h-5 w-5" src="https://avatars0.githubusercontent.com/u/30317862?s=200&v=4" />
                                    <span class="ml-2">r/rhythmvarshney</span>
                                </a>
                                <span class="text-grey-light mx-1 text-xxs">•</span>
                                <span class="text-grey">Posted by</span>
                                <a href="#" class="text-grey mx-1 no-underline hover:underline">u/rhythm</a>
                                <span class="text-grey">2 hours ago</span>
                            </div>
                            <div>
                                <h2 class="text-lg font-medium mb-1">{post.postTitle}</h2>
                                <p class="mb-1" style={{color: '#1c1c1c'}}>{post.postContent}</p>
                                <p class="mb-1" style={{color: '#1c1c1c'}}>{post.id}</p>
                                <img src="https://www.cricbuzz.com/a/img/v1/595x396/i1/c357076/rohit-led-from-the-front-with.jpg"></img>
                                <p>{post.comments}</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    
  );
};

export default PostModal;
