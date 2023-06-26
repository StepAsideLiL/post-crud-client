import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";

const RootLayout = () => {
  const location = useLocation();

  const isLoginOrSignupPage =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div>
      {isLoginOrSignupPage || <Header />}

      <div className="container mx-auto mt-3 max-w-4xl p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
