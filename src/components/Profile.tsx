import React from 'react'
import '../css/Profile.css'    
import { useNavigate } from 'react-router-dom';

function Profile() {

  const navigate = useNavigate(); 
  const handleEditClick = () => {
    navigate("/profile/edit"); 
  };

  return (
    <div className='Profile_main_container'>
      <div className='Profile_top_container'>
        <div className='Profile_banner_container'>
          <button className='Profile_banner_button' onClick={handleEditClick}>Edit Profile</button>
          {/* <div className='Profile_banner_image'> */}
            <img src="/images/profile.png" alt="Profile" className="Profile-Image" />
            <h2 className='Profile_name'>Rose</h2>
          {/* </div> */}
        </div>
        <div className='Profile_banner_info'>
          
        </div>
      </div>


      <div className='Profile_bottom_container'> 
        <div className='Profile_bottom_title'>
          <h3 className='Profile_bottom_title_text'>Contact Information </h3>
          <div className='Profile_items_container'>
            <div className='Profile_items'>
              <p>Mobile Number</p>
              <p>902134667</p>
            </div>
            <div className='Profile_items'>
              <p>Street</p>
              <p>-</p>
            </div>
            <div className='Profile_items'>
              <p>State</p>
              <p>-</p>
            </div>
            <div className='Profile_items'>
              <p>City</p>
              <p>-</p>
            </div>
            <div className='Profile_items'>
              <p>Zip code</p>
              <p>-</p>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Profile