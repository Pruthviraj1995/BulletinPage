import React from 'react';
import PostCard from './PostCard';

const Container = ({dataPosts, dataUsers, dataClick, userdata, dataComments}) => (
    <div className='container'>
            {
              dataPosts.map((post, id) => (
                  <PostCard userdata={userdata} key={id} postDetails={post} dataUsers={dataUsers} dataClick={dataClick} dataComments={dataComments}/>
              ))
            }   
    </div>
    )

export default Container;