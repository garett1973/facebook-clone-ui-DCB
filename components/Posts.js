import React, { useEffect } from 'react'
import { selectPost, addAllPosts } from '../public/src/features/postSlice';
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Posts = () => {
  const dispatch = useDispatch();
  const FACEBOOK_CLONE_ENDPOINT = 'http://localhost:8080/api/v1/post';
  const posts = useSelector(selectPost);
  useEffect(() => {
    const fetchData = () => {
      const response = axios.get(FACEBOOK_CLONE_ENDPOINT)
      .then(response => {
        dispatch(addAllPosts(response.data));
        // console.log(response.data);
      });
    };
    fetchData();
  }, [])

  return (
    <div>
    {posts.map(post => (
      <Post key={post.id} post={post}/>
    ))}
    </div>
  )
}

export default Posts