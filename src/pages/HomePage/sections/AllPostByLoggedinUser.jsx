import { useQuery } from "react-query";
import useAxiosInstance from "../../../hooks/useAxiosInstace";
import useFirebaseAuth from "../../../hooks/useFirebaseAuth";
import PostCard from "../../../components/PostCard";

const AllPostByLoggedinUser = () => {
  const { api } = useAxiosInstance();
  const { user } = useFirebaseAuth();

  const { data: posts = [] } = useQuery({
    queryKey: ["posts", user?.email],
    queryFn: async () => {
      const res = await api.get(`/posts/user/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className="my-5 space-y-5">
      {posts.length === 0 ? (
        <h1 className="my-5 text-center text-2xl font-bold text-neutral-content/50">
          You have not posted yet.
        </h1>
      ) : (
        posts.map((post) => <PostCard key={post?._id} post={post} />)
      )}
    </div>
  );
};

export default AllPostByLoggedinUser;
