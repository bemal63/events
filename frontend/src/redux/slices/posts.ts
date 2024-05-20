import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchPosts as fetchPostsApi} from "../../api/postService"
import {Post, PostsState} from "../../features/post/types"


export const fetchPosts = createAsyncThunk<Post[]>("posts/fetchPosts", async () => {
  const {data} = await fetchPostsApi();
  return data;
})

const initialState: PostsState = {
  items: [],
  status: 'loading'
}

const postSlices = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.items = [];
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.items = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.items = [];
        state.status = "error";
      });
  }
})

export const postsReducer = postSlices.reducer