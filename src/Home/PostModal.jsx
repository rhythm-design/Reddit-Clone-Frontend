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
                <h2>Python invasion has been particularly extensive, notably across South Florida, where a large number of pythons can now be found in the Florida Everglades.[24][25] Between 1996 and 2006, the Burmese python gained popularity in the pet trade, with more than 90,000 snakes imported into the U.S.[26] The current number of Burmese pythons in the Florida Everglades may have reached a minimum viable population and become an invasive species. Hurricane Andrew in 1992 was deemed responsible for the destruction of a python-breeding facility and zoo, and these escaped snakes spread and populated areas into the Everglades.[27] More than 1,330 have been captured in the Everglades.[28] A genetic study in 2017 revealed that the python population is composed of hybrids between the Burmese python and Indian python.[29]

By 2007, the Burmese python was found in northern Florida and in the coastal areas of the Florida Panhandle. The importation of Burmese pythons was banned in the United States in January 2012 by the U.S. Department of the Interior.[30] A 2012 report stated, "in areas where the snakes are well established, foxes, and rabbits have disappeared. Sightings of raccoons are down by 99.3%, opossums by 98.9%, and white-tailed deer by 94.1%."[31] Road surveys between 2003 and 2011 indicated a 87.3% decrease in bobcat populations, and in some areas rabbits have not been detected at all.[32] Experimental efforts to reintroduce rabbit populations to areas where rabbits have been completely eliminated have mostly failed "due to high (77% of mortalities) rates of predation by pythons."[33] Bird and coyote populations may be threatened, as well as the already-rare Florida panther.[31] In addition to this correlational relationship, the pythons have also been experimentally shown to decrease marsh rabbit populations, further suggesting they are responsible for many of the recorded mammal declines. They may also outcompete native predators for food.[34]

For example, Burmese pythons also compete with the native American alligator, and numerous instances of alligators and pythons attacking—and in some cases, preying on—each other have been reported and recorded.

By 2011, researchers identified up to 25 species of birds from nine avian orders in the digestive tract remains of 85 Burmese pythons found in Everglades National Park.[35] Native bird populations are suffering a negative impact from the introduction of the Burmese python in Florida; among these bird species, the wood stork is of specific concern, now listed as federally endangered.[35</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
