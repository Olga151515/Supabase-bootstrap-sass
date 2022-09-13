import React from 'react';
import { Image } from 'react-bootstrap';


const HeaderProvider = ({ user }) => {
    console.log(user);
    const avatar = user.user_metadata.avatar_url;
    const name = 
    user.user_metadata.username || 
    user.user_metadata.full_name ||
    user.user_metadata.user_name;
    
  return <div className='d-flex gap-2 align-items-center'>
    {avatar &&
        <Image src={avatar} roundedCircle style={{width: 32}}/>
    }
    {name}
    </div>
  
}

export default HeaderProvider