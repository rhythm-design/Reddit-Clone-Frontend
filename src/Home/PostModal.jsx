import React, { useRef } from "react";
import "./PostModal.css";
import CommentsPostId from "../Comments/CommentsPostId";

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
    <div className="modal-container">
      <div className="modal">
        <div className="modal-content" ref={modalContentRef} onScroll={handleScroll}>
          <button onClick={onClose} className="close-button float-right absolute sticky">Close</button>
          <div className="flex border border-grey-light-alt hover:border-grey rounded bg-white cursor-pointer mb-4">
            {/* Voting Section */}
            <div className="w-1/12 flex flex-col text-center pt-2">
              {/* ... */}
            </div>

            {/* Main Section */}
            <div className="w-11/12 pt-2">
              <div className="flex items-center text-xs mb-2">
                <a href="#" className="font-semibold no-underline hover:underline text-black flex items-center">
                  <img className="rounded-full border h-5 w-5" src="https://avatars0.githubusercontent.com/u/30317862?s=200&v=4" alt="User Avatar" />
                  <span className="ml-2">r/rhythmvarshney</span>
                </a>
                <span className="text-grey-light mx-1 text-xxs">•</span>
                <span className="text-grey">Posted by</span>
                <a href="#" className="text-grey mx-1 no-underline hover:underline">u/rhythm</a>
                <span className="text-grey">2 hours ago</span>
              </div>
              <div className="fixed-box">
                <h2 className="text-lg font-medium mb-1">{post.postTitle}</h2>
                <p className="mb-1" style={{ color: "#1c1c1c" }}>{post.postContent}</p>
                <p className="mb-1" style={{ color: "#1c1c1c" }}>{post.id}</p>
                <img src="https://www.cricbuzz.com/a/img/v1/595x396/i1/c357076/rohit-led-from-the-front-with.jpg" alt="Post Image" />
              </div>
            </div>
          </div>

          <CommentsPostId/>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
