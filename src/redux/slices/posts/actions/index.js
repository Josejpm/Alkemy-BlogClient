import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../../../config/axios";


export const initialState = {
    posts: [],
    loading: false,
    singlePost: {},
    error:false
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