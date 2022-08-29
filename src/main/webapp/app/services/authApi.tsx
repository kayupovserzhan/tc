import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: builder => ({
    loginUser: builder.mutation({
      query(body: { email: string; password: string }) {
        return {
          url: '',
          method: 'post',
          body,
        };
      },
    }),
    someGet: builder.query({
      query() {
        return {
          url: 'https://jsonplaceholder.typicode.com/todos/1',
          method: 'get',
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useSomeGetQuery } = authApi;
