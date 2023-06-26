import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const { _id, email, title, body, createdAt, updatedAt } = post;

  const time =
    updatedAt - createdAt <= 0
      ? `Posted in: ${createdAt}`
      : `Updated at: ${updatedAt}`;

  const exerpt = body.slice(0, 80);

  return (
    <Link
      to={`/posts/${_id}`}
      className="block space-y-3 rounded-lg border p-5 transition-all hover:scale-105"
    >
      <h1 className="text-2xl font-medium">{title}</h1>

      <p>{time}</p>
      <p>{email}</p>

      <p className="text-xl">{exerpt}...</p>
    </Link>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
