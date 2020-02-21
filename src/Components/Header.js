import React, {useRef } from 'react';
import hamburger from '../assets/hamburger.png';
import logo from '../assets/logo.jpg';
import './styles.scss';

import ProfileComp from './ProfileComp';

const Header = ({dataUsers, userdata, handleSetUserId}) => {
    // const inputEl = useRef();
    // const SetValue=()=>{
    //     console.log("ProfileComp", inputEl.current.value)
    //     handleSetUserId(inputEl.current.value);
    // }
    return (
        <div className='header'>
            <div>
                <div className='logoIcon'><img src={hamburger} alt=''/></div>
                <div className='logo'><img src={logo} alt=''/></div>
            </div> 
            <div>
                <ProfileComp userdata={userdata} dataUsers={dataUsers} handleSetUserId={handleSetUserId}/>
            </div>    
        </div>  
    )
}

export default Header;