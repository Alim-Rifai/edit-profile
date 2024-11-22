import React, { useState } from "react";
import ProfileDisplay from "../components/ProfileDisplay";
import ProfileForm from "../components/ProfileForm";
import styles from "../styles/EditProfile.module.css";

const EditProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Saya seorang pengembang web yang antusias dengan React.",
    avatar: "https://via.placeholder.com/150", // Gambar placeholder
  });

  const handleEditClick = () => setIsEditing(true);

  const handleSave = (updatedProfile) => {
    setUserProfile(updatedProfile);
    setIsEditing(false);
  };

  return (
    <div className={styles.container}>
      <h1>Edit Profil</h1>
      <div className={styles.content}>
        {isEditing ? (
          <ProfileForm profile={userProfile} onSave={handleSave} />
        ) : (
          <ProfileDisplay profile={userProfile} onEditClick={handleEditClick} />
        )}
      </div>
    </div>
  );
};

export default EditProfile;
