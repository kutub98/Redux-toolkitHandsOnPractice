import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: builder => ({
    getTask: builder.query({
      query: () => ({
        url: '/task',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetTaskQuery } = baseApi;
