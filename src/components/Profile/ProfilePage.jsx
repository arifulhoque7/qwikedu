import React from 'react';
import ProfileMenu from './ProfileMenu';
import ProfileSections from './ProfileSections';

const ProfilePage = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <ProfileMenu />
      <ProfileSections />
    </div>
  );
};

export default ProfilePage;
