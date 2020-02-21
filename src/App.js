import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

import Header from './Components/Header';
import Container from './Components/Container';
import Comment from './Components/Comment';

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [userId, setUSerId] = useState(0);
  const [userdata, setUserdata] = useState({})
  const [postId, setPostId] = useState(0);
  const [display, setDisplay] = useState(true);
  const [comments, setComments] = useState({
    postId: '',
    id: '',
    userId: '',
    time: '',
    profilePicture: '',
    body: ''
  });

  const getUsers = () => {
    axios.get('https://panorbit.in/api/users.json')
      .then(res => {
        console.log('resuser', res.data.users);
        setUsers(res.data.users);
        const userobj = res.data.users.find(user => user.id == res.data.users[0].id) || {}
        console.log(userobj)
        setUserdata(userobj)
        setUSerId(res.data.users[0].id)
      })
      .catch(err => {
        console.log('errUser', err)
      })
      console.log('Userdata', userdata);
  }

  const getPosts = () => {
    axios.get('https://panorbit.in/api/posts.json')
      .then(res => {
        console.log('response ', res.data.posts);
        setPosts(res.data.posts);
      })
      .catch(err => {
        console.log('error ', err);
      })
  };

  const getComments = () => {
    axios.get('https://panorbit.in/api/comments.json')
      .then(res => {
        console.log('resComments', res.data.comments);
        setComments(res.data.comments);
      })
      .catch(err => {
        console.log('errComments', err);
      })
  }

  useEffect(() => {
    getPosts();
    getUsers();
    getComments();
  }, [])

  const handleclick = (id) => {
    setPostId(id)
    setDisplay(!display);
  }

  const setUser = (id) => {
    const userobj = users.find(user => user.id == id) || {}
    setUserdata(userobj)
    setUSerId(id)
    console.log('>>', id, userobj)
  }

  const handleAddComment = (message) => {
    const newcomment = {
      postId,
      id: new Date().getTime(),
      userId,
      profilePicture: userdata.profilepicture,
      body: message
    }
    setComments([
      ...comments,
      newcomment
    ]
    )
  }

  return (

    <div className="root">
      {
        display ?

          <div className="App">
            <Header dataUsers={users} handleSetUserId={setUser} userdata={userdata} />
            <Container dataPosts={posts.filter(pst => pst.userId == userId)} dataUsers={users} dataClick={handleclick} userdata={userdata} />
          </div>

          : 

          <div className="App">
            <Comment dataComments={comments.filter(cmd => cmd.postId == postId)} dataClick={handleclick} handleAddComment={handleAddComment} />
          </div>
      }
    </div>
  );
}

export default App;
