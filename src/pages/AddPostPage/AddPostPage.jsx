import { useForm } from "react-hook-form";
import { BsJournalPlus } from "react-icons/bs";
import useAxiosInstance from "../../hooks/useAxiosInstace";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import { toastError, toastSuccess } from "../../utils/toastMessages";
import { useNavigate } from "react-router-dom";

const AddPostPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useFirebaseAuth();
  const { api } = useAxiosInstance();
  const navigate = useNavigate();

  const handlePost = (data) => {
    const postData = { ...data, email: user?.email };

    api
      .post("/posts", postData)
      .then((res) => {
        if (res.data) {
          toastSuccess("Successfully Posted!");
          navigate("/");
        }
      })
      .catch((err) => {
        console.error(err);
        toastError("Failed to post!");
      });
  };

  return (
    <form onSubmit={handleSubmit(handlePost)}>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">New Posts</h1>

        <button
          type="submit"
          className="btn-primary btn-outline btn flex items-center gap-1"
        >
          <BsJournalPlus className="text-2xl" />
          <span className="text-xl font-medium">Post</span>
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
            {...register("title", { required: true })}
            placeholder="Enter Post Title"
            className="input-bordered input w-full"
          />
          {errors.title?.type === "required" && (
            <p role="alert" className="text-red-600">
              Title is required
            </p>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Post Body</span>
          </label>
          <textarea
            name="post"
            {...register("body", { required: true })}
            placeholder="Write your post"
            className="textarea-bordered textarea h-40"
          ></textarea>
          {errors.body?.type === "required" && (
            <p role="alert" className="text-red-600">
              Post is required
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default AddPostPage;
