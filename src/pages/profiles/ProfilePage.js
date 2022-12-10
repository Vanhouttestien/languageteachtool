import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosReq } from '../../api/axiosDefault';
import Post from '../posts/Post';
import Profile from './Profile';

function ProfilePage() {
    const { id } = useParams();
    const [profile, setProfile] = useState({results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: profile}] = await Promise.all([
                    axiosReq.get(`/profiles/${id}`)
                ])
                setProfile({results: [profile]})
                console.log(profile)
             } catch (err) {
                console.log(err)
            }
        }
        handleMount();
    }, [id])

  return (
    <>
        <Profile {...profile.results[0]} setProfile={setProfile} ProfilePage />
    </>
    
  )
}

export default ProfilePage