import React, { useState } from 'react';

import './styles.scss';

const ProfileComp = ({userdata, dataUsers, handleSetUserId}) => {
    const [show, setShow] = useState(false);

    const displayList = () => {
        setShow(!show);
    }

    const handleClick = (id) => {
        handleSetUserId(id);
        displayList();
    }

    return(
    <div className='profileComp'>
        <img src={userdata.profilepicture} alt='' className='icon iconprof' onClick={displayList} />
        <div className='listUserProf'>
            {
                show &&
                <ul className='listUser'>
                    {
                       dataUsers.map((ulist, id) => (
                            <li key={id} onClick={()=>handleClick(ulist.id)}>{ulist.name}</li> 
                       ))
                    }        
                </ul>
            }     
        </div>
    </div>
)}

export default ProfileComp;