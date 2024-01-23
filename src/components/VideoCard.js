import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="m-2 p-3 w-64 rounded-xl cursor-pointer hover:shadow-md">
      <img
        className="rounded-md"
        src={thumbnails.medium.url}
        alt="VideoThumbnail"
      />
      <ul>
        <li className="font-bold text-lg py-1">{title.slice(0, 40)}</li>
        <li className="font-semibold">{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const RedBorderedVideo = ({ info }) => {
  return (
    <div className="border border-red-900">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
