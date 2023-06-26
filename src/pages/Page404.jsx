import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-9xl font-bold text-error">404</h1>
        <p className="text-3xl font-medium">Wrong Page</p>
        <Link to="/" className="btn-warning btn text-xl font-medium">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Page404;
