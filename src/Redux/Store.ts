import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from '../Redux/Features/TodoSlice';
import { baseApi } from './api/api';
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    todo: TodoReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
