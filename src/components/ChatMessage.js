import React from "react";

const chatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-1 shadow-sm rounded-md">
      <img
        className=" w-10 rounded-full"
        src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
        alt="profile Pic"
      />

      <p className="text-sm pl-3">
        <span className="font-semibold mr-1 p-[2px] px-2 rounded-md bg-slate-200 text-gray-600">
          {name}
        </span>
        {message}
      </p>
    </div>
  );
};

export default chatMessage;
