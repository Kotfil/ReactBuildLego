import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';


const Profile = () => {
return (
    <div className={s.content}>
    <div>
    <img src="https://images.unsplash.com/photo-1516641051054-9df6a1aad654?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"></img>
    </div>
    <div>
    ava + description
    </div>
   <MyPosts />
</div>
);
}   

export default Profile;