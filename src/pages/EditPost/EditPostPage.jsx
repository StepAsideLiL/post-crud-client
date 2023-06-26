import { useForm } from "react-hook-form";
import { BsArrowClockwise } from "react-icons/bs";
import useAxiosInstance from "../../hooks/useAxiosInstace";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toastError, toastSuccess } from "../../utils/toastMessages";

const EditPostPage = () => {
  const { register, handleSubmit } = useForm();

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

  const { _id, title, body } = post;

  const handleUpdate = (data) => {
    api
      .patch(`/posts/${_id}`, data)
      .then((res) => {
        if (res.data) {
          toastSuccess("Post updated!");
          navigate(`/posts/${_id}`);
        }
      })
      .catch((err) => {
        console.error(err);
        toastError("Update failed!");
      });
  };

  return (
    <form onSubmit={handleSubmit(handleUpdate)}>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Edit Posts</h1>

        <button
          type="submit"
          className="btn-primary btn-outline btn flex items-center gap-1"
        >
          <BsArrowClockwise className="text-2xl" />
          <span className="text-xl font-medium">Update</span>
        </button>
      </div>

      <div className="space-y-3 py-5">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Post </span>
          </label>
          <input
            type="text"
            name="title"
            defaultValue={title}
            {...register("title", { required: true })}
            placeholder="Enter Post Title"
            className="input-bordered input w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Post Body</span>
          </label>
          <textarea
            name="body"
            defaultValue={body}
            {...register("body", { required: true })}
            placeholder="Write your post"
            className="textarea-bordered textarea h-40"
          ></textarea>
        </div>
      </div>
    </form>
  );
};

export default EditPostPage;
