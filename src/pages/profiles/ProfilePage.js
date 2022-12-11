import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from 'react-router-dom'
import { axiosReq } from '../../api/axiosDefault';
import Asset from '../../components/Asset';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { fetchMoreData } from '../../utils/utils';
import Post from '../posts/Post';
import Profile from './Profile';


function ProfilePage() {
    const { id } = useParams();
    const [profile, setProfile] = useState({results: [] });
    const [profilePosts, setProfilePosts] = useState({results: [] });
    const is_owner = useCurrentUser?.username === profile?.owner;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [{data: profile}, {data: profilePosts}] = await Promise.all([
                    axiosReq.get(`/profiles/${id}`),
                    axiosReq.get(`/posts/?age=&level=&language=&owner=${id}`),
                ]);
                setProfile({results: [profile]})
                setProfilePosts(profilePosts)
             } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [id])


    const mainProfilePosts = (
        <>
        {profilePosts.results.length ? (
            <InfiniteScroll
              children={profilePosts.results.map((post) => (
                <Post key={post.id} {...post} setPosts={profilePosts} />
              ))}
              dataLength={profilePosts.results.length}
              hasMore={!!profilePosts.next}
              next={() => fetchMoreData(profilePosts, setProfilePosts)}
            />
          ) : (
            <p>No results</p>
          )}
        </>

      );


  return (
    <>
        <Profile {...profile.results[0]} setProfile={setProfile} ProfilePage />
      <div >
        <h2 className="text-light">Posts: </h2>
        {mainProfilePosts}
        <br/>
        <br/>
        </div>

    </>
  )
}

export default ProfilePage