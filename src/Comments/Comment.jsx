import React, { useState } from 'react';
import "./Comment.css"
import api from '../api';
const Comment = ({ comment }) => {
  const [inputType, setInputType] = useState("hidden")
  const [replyMessage, setReplyMessage] = useState("")
  const handleReplyClick = (e, commentId) => {
    e.preventDefault()

    console.log("reply clicked....", replyMessage)
    setInputType(inputType === "hidden" ? "text" : "hidden")
    const newCommentReply = {}
    if(inputType === "text" && replyMessage.trim() !== '') {
    newCommentReply.userEmail = "ayush@verma";
    newCommentReply.commentData = replyMessage;
    
    api.post(`/comment/reply/${commentId}`, newCommentReply)
      .then((res) => {console.log(res)})
      .catch((err) => console.log(err))
    }
  }


  return (
    <div style={{
      marginLeft: '20px', marginBottom: '50px', borderLeft: '1px solid #ccc', padding: '5px'

    }}>
      <div style={{
        display: "flex",
        // flexDirection: "column",
        margin: "10px",
        justifyContent: "space-between"
      }} id="commentContainer">
        {comment.commentData}
        
        <span>
            <input type={inputType} name="replyComment" onChange={(e)=>{setReplyMessage(e.target.value)}}/>
            <button id="replyButton" onClick={(e)=>{handleReplyClick(e, comment.id)}}>Reply...</button>
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