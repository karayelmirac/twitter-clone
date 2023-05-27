import React from "react";

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-3 hover:bg-primary-light cursor-pointer rounded-r-full py-2 px-4 transform transition-colors duration-200">
      <img className="w-11 h-11 rounded-full" src="https://pbs.twimg.com/profile_images/1465223256013774848/a6c2Boi4_400x400.jpg" alt="profile" />
      <div className="flex flex-col">
        <span className="font-bold text-md text-black">Miraç Karayel</span>
        <span className="text-sm text-gray-dark">@MiracKarayel</span>
      </div>
      <div className="flex space-x-1">
            <div className="w-1 h-1 bg-gray-900 rounded-r-full"></div>
            <div className="w-1 h-1 bg-gray-900 rounded-r-full"></div>
            <div className="w-1 h-1 bg-gray-900 rounded-r-full"></div>
      </div>
    </div>
  );
};

export default UserBox;
