import { Post } from "features/post/types";
import axios from "../axios"

interface FetchPostsResponse {
  data: Post[];
}

export const fetchPosts = async (): Promise<FetchPostsResponse> => {
  const { data } = await axios.get('/posts');
  return { data: data as Post[] };
};
