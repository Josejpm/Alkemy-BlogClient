import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../../config/axios";

const initialState = {
  posts: [],
  loading: false,
  error: null,
  singlePost: {},
};


//Get all post
export const fetchPosts = createAsyncThunk("posts/fetchAllPosts", async () => {
  const resp = await axiosClient();
  return resp.data;
});

//Get a single post by id
export const getPostById = createAsyncThunk("posts/getPostById", async (id) => {
  const resp = await axiosClient(`/${id}`);
  return resp.data;
});

//Create a new post
export const newPost = createAsyncThunk("posts/newPost", async (payload) => {
  // const { body } = payload;
  const resp = await axiosClient.post('/', payload);
  return resp.data;
});

//Delete a post by id
export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  await axiosClient.delete(`/${id}`);
  return id;
});

//Edit a post by id
export const editPost = createAsyncThunk("posts/editPost", async (payload) => {
  const { id, body } = payload;
  const resp = await axiosClient.put(`/${id}`, body);
  return resp.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(newPost.fulfilled, (state,action) => {
        state.posts = [action.payload,...state.posts]
        state.loading = false;
      })
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
        state.loading = false;
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        );
        state.loading = false;
      });
  },
});

const { reducer } = postsSlice;

export default reducer;
