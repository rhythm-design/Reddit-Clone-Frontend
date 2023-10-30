
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './Comment';
import { useParams } from 'react-router-dom';

import api from './../api'

const CommentsPostId = () => {
  const [comments, setComments] = useState([]);

  const [newComment, setNewComment] = useState({});

  const [newUserEmail, setUserEmail] = useState();
  const [newCommentData, setNewCommentData] = useState();

  let { postId } = useParams()
  useEffect(() => {
    axios.get(`http://localhost:8080/api/comment/post/${postId}`)
      .then(res => setComments(res.data))
      .catch(error => console.error(error));

    console.log("comments", comments)
  }, []);

  const submitCommentForPostId = async (e) => {
    e.preventDefault()
    
    // const obj = {
    //   userEmail : newUserEmail,
    //   commentData : newCommentData
    // }
    // setNewComment(obj)

    newComment.userEmail = newUserEmail;
    newComment.commentData = newCommentData;

    await api.post(`/comment/create/${postId}`, newComment)
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })

  }

  return (
    <main>
      <div>
        <form>
          <div className="headings">
            <img src="https://www.logo.wine/a/logo/Reddit/Reddit-Vertical-White-Dark-Background-Logo.wine.svg" alt="Reddit Logo">
            </img>
            <h2> &nbsp; Write Comment </h2>
          </div>

          <input type="text" name="userEmail" onChange={(e) => setUserEmail(e.target.value)}  placeholder="User..." />
          <input type="text" name="newCommentData" onChange={(e) => setNewCommentData(e.target.value)} placeholder="Write Comment..." />

          <button type="submit" onClick={(e) => submitCommentForPostId(e)}> Comment.....</button>
        </form>
      </div>
      <div>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </main>
  );
};

export default CommentsPostId;