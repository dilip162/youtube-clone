import React from "react";
import CommentsList from "./CommentsList";

const CommentContainer = () => {
  const commentsData = [
    {
      name: "Dilip Baghel",
      text: "lorem is a very good dummy text generator",
      replies: [
        {
          name: "Sumit Baghel",
          text: "lorem is a very good dummy text generator",
          replies: [],
        },
      ],
    },
    {
      name: "Sumit Baghel",
      text: "lorem is a very good dummy text generator",
      replies: [
        {
          name: "Sumit Baghel",
          text: "lorem is a very good dummy text generator",
          replies: [
            {
              name: "Sumit Baghel",
              text: "lorem is a very good dummy text generator",
              replies: [
                {
                  name: "Sumit Baghel",
                  text: "lorem is a very good dummy text generator",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Sourabh Baghel",
      text: "lorem is a very good dummy text generator",
      replies: [
        {
          name: "Sumit Baghel",
          text: "lorem is a very good dummy text generator",
          replies: [
            {
              name: "Sumit Baghel",
              text: "lorem is a very good dummy text generator",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Ankit Baghel",
      text: "lorem is a very good dummy text generator",
      replies: [
        {
          name: "Sumit Baghel",
          text: "lorem is a very good dummy text generator",
          replies: [],
        },
      ],
    },
    {
      name: "Sunil Baghel",
      text: "lorem is a very good dummy text generator",
      replies: [],
    },
    {
      name: "Aakash Baghel",
      text: "lorem is a very good dummy text generator",
      replies: [],
    },
  ];

  return (
    <div className="m-4 w-[950px]">
      <h1 className="text-2xl mb-4 text-gray-600">Comments</h1>

      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
