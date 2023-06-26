import useFirebaseAuth from "../../../hooks/useFirebaseAuth";
import { Link, useNavigate } from "react-router-dom";
import { toastError, toastSuccess } from "../../../utils/toastMessages";

const NavRight = () => {
  const { user, setUser, auth, logout } = useFirebaseAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(auth)
      .then(() => {
        setUser(null);
        navigate("/");
        toastSuccess("Logout Successful!");
      })
      .catch((error) => {
        console.error(error);
        toastError("Logout Failed!");
      });
  };

  return (
    <div className="flex-none">
      <div className="dropdown-end dropdown">
        <label tabIndex={0} className="btn-ghost btn">
          <div>
            <h1>{user?.displayName}</h1>
          </div>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-base-200 p-2 shadow"
        >
          <li>
            <Link to="/profile" className="justify-between">
              Profile
            </Link>
          </li>

          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavRight;
