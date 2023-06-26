import { Link } from "react-router-dom";

const NavLeft = () => {
  return (
    <div className="flex-1">
      <Link to="/" className="btn-ghost btn text-xl normal-case">
        Post CRUD
      </Link>
    </div>
  );
};

export default NavLeft;
