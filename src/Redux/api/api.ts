import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['todo'],
  endpoints: builder => ({
    getTask: builder.query({
      // query: () => ({
      //   url: '/task',
      //   method: 'GET',
      // }),
      query: priority => {
        const params = new URLSearchParams();
        if (priority) {
          params.append('priority', priority);
        }
        return {
          url: `/task`,
          method: 'GET',
          params: params,
        };
      },
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
    updateTask: builder.mutation({
      query: options => {
        console.log(options, 'from api ');
        return {
          url: `/task/${options.id}`,
          method: 'PUT',
          body: options.data,
        };
      },
      invalidatesTags: ['todo'],
    }),
  }),
});

export const {
  useGetTaskQuery,
  useAddTaskMutation,
  useDeleteTodoMutation,
  useUpdateTaskMutation,
} = baseApi;
