import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const listing = [
    "All",
    "Javascript",
    "Recruitment",
    "Stocks",
    "Lectures",
    "Editing",
    "Sales",
    "Cooking",
    "News",
    "AI",
    "startup",
    "Coding interviews",
    "Recently uploaded",
  ];
  return (
    <div className="flex justify-center py-5 px-2">
      {listing.map((list, idx) => (
        <Button key={idx} name={list} />
      ))}
    </div>
  );
};

export default ButtonList;
