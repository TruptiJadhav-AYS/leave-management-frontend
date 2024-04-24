import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const forgotApi = createApi({
  reducerPath: 'forgotApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({

    getOtp: builder.mutation({
      query: (obj) => ({
        url: '/auth/forgotpassword',
        method: 'POST',
        body: obj,
      }),
    }),
  }),
  
});

export const { useGetOtpMutation } = forgotApi;
export default forgotApi;