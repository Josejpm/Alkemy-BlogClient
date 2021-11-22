import { createSlice } from "@reduxjs/toolkit";
import {deletePost,editPost,fetchPosts,getPostById,newPost,initialState} from './actions/index'


const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    clearSinglePost:(state)=>{ state.singlePost={}}
  },
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
        state.error=false
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.loading = false;
        state.singlePost = action.payload;
      })
      .addCase(getPostById.rejected, (state) => {
        state.error = true;
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
      })
      
  },
});

const { reducer,actions } = postsSlice;
const {clearSinglePost} = actions;

export {clearSinglePost}
export default reducer;
