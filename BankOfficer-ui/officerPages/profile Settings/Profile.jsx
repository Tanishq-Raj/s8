import "./profile.scss";
import Header from "../../dashComponent/nav/header/Header";
import Sidebar from "../../dashComponent/Sidebar/Sidebar";
import { useState } from "react";

const Profile = () => {

  const [avatar, setAvatar] = useState(
    "user.png"
  );

  const [showPopup, setShowPopup] = useState(false); // State for popup

   // Handler for updating the avatar
   const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result); // Set the selected image as the avatar preview
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Save Button Click
  const handleSave = () => {
    setShowPopup(true); // Show the popup

    // Hide the popup after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="profile">
     <div className="sideContainer2">
      <Sidebar />
      </div>
      <div className="mainContent">
        <Header />
        <div className="mainWrapper">
          <div className="profileLayout">
            {/* Left Column */}
            <div className="profileLeftContainer">
              <div className="avatarSection">
                {/* Profile Image and User Details in a Row */}
                <div className="avatarAndDetails">
                  <img src={avatar} alt="User Avatar" className="avatarImage" />
                  <div className="userDetails">
                    <h1 className="userName">Anima Agrawal</h1>
                    <p className="userRole">Bank Manager</p>
                    <p className="userCompany">State Bank of India</p>
                  </div>
                </div>
                {/* Upload Button Below */}
                <button
                  type="button"
                  className="uploadButton"
                  onClick={() => document.getElementById("avatarInput").click()}
                >
                  Upload new avatar
                </button>
                <input
                  id="avatarInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleAvatarChange}
                />
              </div>
              <div className="section">
                <h2 className="sectionTitle">Job Information</h2>
                {/* <div className="separator2"></div> Add the separator */}

                <div className="inputGroup">
                  <label className="label">BANK NAME</label>
                  <input type="text" className="textInput" />
                </div>
                <div className="dualInputGroup">
                  <div className="inputGroup">
                    <label className="label">EMPLOYEE ID</label>
                    <input type="text" className="textInput" />
                  </div>
                  <div className="inputGroup">
                    <label className="label">EMPLOYEE EMAIL</label>
                    <input type="email" className="textInput" />
                  </div>
                </div>
                <div className="inputGroup">
                  <label className="label">BANK ADDRESS</label>
                  <textarea className="textArea"></textarea>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="profileRightContainer">
              <div className="section">
                <h2 className="sectionTitle">Profile Information</h2>
                <div className="dualInputGroup">
                  <div className="inputGroup">
                    <label className="label">FIRST NAME</label>
                    <input type="text" className="textInput" />
                  </div>
                  <div className="inputGroup">
                    <label className="label">LAST NAME</label>
                    <input type="text" className="textInput" />
                  </div>
                </div>
                <div className="inputGroup">
                  <label className="label">JOB TITLE</label>
                  <input type="text" className="textInput" />
                </div>
                <div className="inputGroup">
                  <label className="label">EMAIL</label>
                  <input type="email" className="textInput" />
                </div>
              </div>
              <div className="actionButtons">
                <button type="button" className="cancelButton">
                  Cancel
                </button>
                <button type="submit" className="saveButton" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Popup Message */}
       {showPopup && (
        <div className="popupMessage">
          <p>Profile saved successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
