import React, { useState } from 'react';

import back from '../assets/back.png';

import './sty.scss';

const Comment = ({ dataComments, dataClick, handleAddComment }) => {
    const [comment, setcomment] = useState('')
    const handleChange = (e) => {
        setcomment(e.target.value)
    }

    const submitcomment = (e) => {
        e.preventDefault()
        if (comment !== '') {
            handleAddComment(comment);
        }
        setcomment('');
    }

    return (
        <div className='commentPage'>
            <div className='cHeader'>
                <div className='backBtn' style={{ cursor: 'Pointer' }}><img src={back} onClick={dataClick} alt='' /></div>
                <span className='comment'>Comments</span>
            </div>
            <div>
                {
                    dataComments.map((coment, indx) => (
                        <div className='comments' key={indx}>
                            <div className='userProfile'><img src={coment.profilePicture} alt='' className='icon iconCom' /></div>
                            <div className='comdesc' key={coment}>{coment.body}</div>
                        </div>))
                }
            </div>
            <form className='cFooter' onSubmit={submitcomment}>
                <div className='profile'><img src={dataComments[0].profilePicture} alt='' className='icon iconCom' /></div>
                <div className='inputText'><input value={comment} type='text' onChange={handleChange} placeholder='Add a Comment...' />
                </div>
                <div className='postBtn' onClick={submitcomment} style={{ cursor: 'Pointer' }}>Post</div>
            </form>
        </div>
    )
}

export default Comment;