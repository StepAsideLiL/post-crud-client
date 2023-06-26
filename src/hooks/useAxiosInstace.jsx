import axios from "axios";

const useAxiosInstance = () => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API,
  });

  return { api };
};

export default useAxiosInstance;
