import React from 'react';
import like from '../assets/like.png';
import comment from '../assets/comment.png';
import './styles.scss';

const PostCard = ({ postDetails, dataClick, userdata }) => {

    return (
        <div className='card'>
            <div className='userName'>
                <div className='profile'><img src={userdata.profilepicture} alt='' className='icon iconprof' /></div>
                <span>by {userdata.name}</span>
            </div>
            <div className='postDetails'>
                <div className='postDesc'>{postDetails.title}</div>
                <div className='postDate'>{postDetails.time}</div>
                <div className='postImg'><img src={postDetails.image} alt=""/></div>
            </div>
            <div className='postReactions'>
                <div>
                   <img src={like} alt='' className='like icon' />
                   <img src={comment} alt='' className='comment icon' /><span>1 Comments</span>
                </div>
                    <div className='profile prof'>
                        <span style={{cursor: 'Pointer'}} onClick={()=>dataClick(postDetails.id)}>
                            Add a comment
                        </span>
                        <img src={userdata.profilepicture} alt='' className='icon iconprof' /></div>
            </div>
        </div>
    )
}

export default PostCard;