import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const {data} = await axios.get("/posts");
  return data;
})

const initialeState = {
  posts: {
    items: [],
    status: "loading"
  }
}

const postSlices = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.items = []
      state.status = "loading"
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = "loaded"
    },
    [fetchPosts.rejected]: (state, actions) => {
      state.items = []
      state.status = "error"
    }
  }
})

export const postsReducer = postSlices.reducer