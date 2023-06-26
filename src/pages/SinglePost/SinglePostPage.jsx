import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosInstance from "../../hooks/useAxiosInstace";
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import { toastError, toastSuccess } from "../../utils/toastMessages";

const SinglePostPage = () => {
  const params = useParams();
  const { api } = useAxiosInstance();
  const navigate = useNavigate();

  const { data: post = {} } = useQuery({
    queryKey: ["posts", params.id],
    queryFn: async () => {
      const res = await api.get(`/posts/${params.id}`);
      return res.data;
    },
  });

  const { _id, title, body, createdAt, updatedAt } = post;

  const time =
    updatedAt - createdAt <= 0
      ? `Posted in: ${createdAt}`
      : `Updated at: ${updatedAt}`;

  const handleDeleteBtn = () => {
    api
      .delete(`/posts/${_id}`)
      .then((res) => {
        console.log(res.data);
        toastSuccess("Successfully deleted!");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        toastError("Failed to delete!");
      });
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>

          <p>{time}</p>
        </div>

        <div className="flex items-center gap-1">
          <button
            className="btn-error btn-outline btn"
            onClick={handleDeleteBtn}
          >
            <BsFillTrashFill className="text-4xl" />
          </button>

          <Link
            to={`/posts/edit/${_id}`}
            className="btn-primary btn-outline btn flex items-center gap-1"
          >
            <BsPencilSquare className="text-4xl" />
            <span>Edit</span>
          </Link>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold">{body}</h3>
      </div>
    </div>
  );
};

export default SinglePostPage;
