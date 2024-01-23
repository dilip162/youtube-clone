import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [search] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <>
      <div className="p-4 flex flex-col w-full">
        <div className="m-2 flex ">
          <div>
            <iframe
              className="rounded-xl"
              width="950"
              height="540"
              src={"https://www.youtube.com/embed/" + search.get("v")}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="w-full">
            <LiveChat />
          </div>
        </div>
        <CommentContainer />
      </div>
    </>
  );
};

export default WatchPage;
