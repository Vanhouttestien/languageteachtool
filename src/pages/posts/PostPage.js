 import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosReq } from '../../api/axiosDefault';
import Post from './Post';

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState({results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: post}] = await Promise.all([
                    axiosReq.get(`/posts/${id}`)
                ])
                setPost({results: [post]})
                console.log(post)
             } catch (err) {
                console.log(err)
            }
        }
        handleMount();
    }, [id])

  return (
    <>

        <Post {...post.results[0]} setPosts={setPost} postPage />
    </>
    
  )
}

export default PostPage