import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import PrivateRouter from "./PrivateRouter";
import AddPostPage from "../pages/AddPostPage/AddPostPage";
import EditPostPage from "../pages/EditPost/EditPostPage";
import SinglePostPage from "../pages/SinglePost/SinglePostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRouter>
            <HomePage />
          </PrivateRouter>
        ),
      },
      {
        path: "/posts/:id",
        element: (
          <PrivateRouter>
            <SinglePostPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/posts/add",
        element: (
          <PrivateRouter>
            <AddPostPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/posts/edit/:id",
        element: (
          <PrivateRouter>
            <EditPostPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
