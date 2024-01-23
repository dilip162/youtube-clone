import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  //using indexes as key
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="ml-5 pl-3 border border-l-gray-600">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
