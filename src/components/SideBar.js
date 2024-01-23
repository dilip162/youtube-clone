import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null; // early return pattern

  return (
    <div className="py-4 shadow-lg w-48">
      <ul>
        <li className="px-3 py-2 cursor-pointer rounded-lg hover:bg-slate-300">
          <a href="/">Home</a>
        </li>
        <li className="px-3 py-2 cursor-pointer rounded-lg hover:bg-slate-300">
          Shorts
        </li>
        <li className="px-3 py-2 cursor-pointer rounded-lg hover:bg-slate-300">
          Subscription
        </li>
      </ul>
      <h1 className="font-bold text-gray-600 px-3 pt-4">Subscriptions</h1>
      <ul>
        <li className="px-3 py-2 cursor-pointer rounded-lg hover:bg-slate-300">
          Music
        </li>
        <li className="px-3 py-2 cursor-pointer rounded-lg hover:bg-slate-300">
          Sports
        </li>
        <li className="px-3 py-2 cursor-pointer rounded-lg hover:bg-slate-300">
          Gaming
        </li>
        <li className="px-3 py-2 cursor-pointer rounded-lg hover:bg-slate-300">
          Movies
        </li>
      </ul>

      <h1 className="font-bold text-gray-600 px-3 pt-4">Explore</h1>
      <ul>
        <li className="px-3 py-2 cursor-pointer rounded-lg hover:bg-slate-300">
          Trending
        </li>
        <li className="px-3 py-2 cursor-pointer rounded-lg hover:bg-slate-300">
          Shopping
        </li>
        <li className="px-3 py-2 cursor-pointer rounded-lg hover:bg-slate-300">
          Live
        </li>
        <li className="px-3 py-2 cursor-pointer rounded-lg hover:bg-slate-300">
          News
        </li>
        <li className="px-3 py-2 cursor-pointer rounded-lg hover:bg-slate-300">
          Sports
        </li>
        <li className="px-3 py-2 cursor-pointer rounded-lg hover:bg-slate-300">
          Learning
        </li>
        <li className="px-3 py-2 cursor-pointer rounded-lg hover:bg-slate-300">
          Fashion & Beauty
        </li>
        <li className="px-3 py-2 cursor-pointer rounded-lg hover:bg-slate-300">
          Podcasts
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
