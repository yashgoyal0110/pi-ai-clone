import { BsStars } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import "./ProfileSection.css";
import { useState } from "react";

function ProfileSection() {
  const [discoverClick, setDiscoverClick] = useState(true);
  const [profileClick, setProfileClick] = useState(false);
  function handleProfileClick(){
    setProfileClick(true)
    setDiscoverClick(false)
  }
  function handleDiscoverClick(){
    setProfileClick(false)
    setDiscoverClick(true)
  }
  return (
    <div className="profile-section-wrapper">
      <div className="profile-section">
        <div
          className={!discoverClick ? "discover" : "discover discover-clicked"}
          onClick={() => handleDiscoverClick()}
        >
          <div className="discover-icon">
            <BsStars />
          </div>
          <div className="discover-text">Discover</div>
        </div>
        <div className={!profileClick ? "profile" : "profile profile-clicked"} onClick={() => handleProfileClick()}>
          <div className="profile-icon">
            <FaUser />
          </div>
          <div className="profile-text">Profile</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
