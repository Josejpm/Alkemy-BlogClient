import { configureStore } from '@reduxjs/toolkit';

import postsReducer from '../redux/slices/posts';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  }
});
