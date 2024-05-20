import React from "react";

interface UserProfileProps {
  user: string;
  signOut: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({
  user,
  signOut,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute flex-col bg-gray-700 p-4 gap-y-10 rounded-sm"
    >
      <div className="">{user}</div>
      <div>My Learning</div>
      <div>
        <button
          className="bg-gray-500 p-1 rounded-md hover:bg-gray-600 transition-all duration-300"
          onClick={signOut}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
