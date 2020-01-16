import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/Profileinfo";

const Profile = () => {

    let posts = [
        {id:1, message:'Hi,how are you?', likesCount: 12},
        {id:2, message:'Its my first post', likesCount: 11},
        {id:3, message: 'Hello Filippe', likesCount: 11},
        {id:4, message:'Say Hello', likesCount: 11}
   ]

   return (
        
        <div>
      <ProfileInfo />
      <MyPosts  posts={posts} />
    </div>
 
  );
};

export default Profile;
