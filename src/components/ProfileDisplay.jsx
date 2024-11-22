import React from "react";
import styles from "../styles/EditProfile.module.css";

const ProfileDisplay = ({ profile, onEditClick }) => {
  return (
    <div className={styles.profileDisplay}>
      <img src={profile.avatar} alt="Avatar" className={styles.avatar} />
      <h2>{profile.name}</h2>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Bio:</strong> {profile.bio}</p>
      <button onClick={onEditClick} className={styles.editButton}>
        Edit Profil
      </button>
    </div>
  );
};

export default ProfileDisplay;
