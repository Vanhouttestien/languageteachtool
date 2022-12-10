import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosReq } from '../../api/axiosDefault';
import Post from './Post';

function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const {data: post} = await axiosReq.get(`/posts/${id}`)
                setPost(post)
                console.log(post)
             } catch (err) {
                console.log(err)
            }
        }
        fetchPost();
    }, [id])

  return (
   
        <Post {...post} setPosts={setPost}  />
   
    
  )
}

export default PostPage