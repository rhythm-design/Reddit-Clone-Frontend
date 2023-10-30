import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div style={{
      marginLeft: '20px', marginBottom: '50px', borderLeft: '1px solid #ccc', padding: '5px'

    }}>
      <div style={{
        display: "flex",
        // flexDirection: "column",
        margin: "10px",
        justifyContent: "space-between"
      }}>
        {comment.commentData}
        
        <span>
          <button>Reply...</button>
          <i className="fa-solid fa-user"></i>
          &nbsp; {comment.userEmail}
        </span>
      </div>
      {
        comment.childComments
        &&
        comment.childComments.length > 0
        &&
        (
          <div style={{ marginLeft: '20px' }}>
            {comment.childComments.map(childComment =>
            (
              <Comment key={childComment.id} comment={childComment} />
            )
            )}
          </div>
        )}
    </div>
  );
};

export default Comment;