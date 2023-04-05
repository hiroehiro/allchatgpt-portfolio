// pages/profile.tsx

import React from "react";
import { profileData } from "../data/profileData";

const ProfilePage: React.FC = () => {
  return (
    <div>
      <h1>{profileData.name}</h1>
      <p>{profileData.introduction}</p>
      <ul>
        {profileData.skills.map((skill: string, index: number) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;
