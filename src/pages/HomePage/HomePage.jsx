import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import AllPostByLoggedinUser from "./sections/AllPostByLoggedinUser";

const HomePage = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Posts</h1>

        <Link
          className="btn-primary btn-outline btn flex items-center gap-1"
          to="/posts/add"
        >
          <BsPlus className="text-2xl" />
          <span className="text-xl font-medium">Add Post</span>
        </Link>
      </div>

      <AllPostByLoggedinUser />
    </div>
  );
};

export default HomePage;
