import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['todo'],
  endpoints: builder => ({
    getTask: builder.query({
      query: priority => ({
        url: `/task?priority=${priority}`,
        method: 'GET',
      }),
      providesTags: ['todo'],
    }),
    addTask: builder.mutation({
      query: taskDetails => {
        return {
          url: '/task',
          method: 'POST',
          body: taskDetails,
        };
      },
      invalidatesTags: ['todo'],
    }),
    deleteTodo: builder.mutation({
      query: id => ({
        url: `/task/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['todo'],
    }),
  }),
});

export const { useGetTaskQuery, useAddTaskMutation, useDeleteTodoMutation } =
  baseApi;
