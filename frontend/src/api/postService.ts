import axios from "../axios"

export const fetchPosts = async () => {
  const { data } = await axios.get('/posts');
  return data;
};
