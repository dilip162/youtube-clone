import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex items-center mb-3 rounded-md bg-slate-50 shadow shadow-lg">
      <img
        className="w-11 h-11 m-1"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="replied user"
      />
      <div className="p-2">
        <p className="font-bold text-lg">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
