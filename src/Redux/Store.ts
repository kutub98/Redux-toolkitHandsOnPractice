import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from '../Redux/Features/TodoSlice';
export const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
