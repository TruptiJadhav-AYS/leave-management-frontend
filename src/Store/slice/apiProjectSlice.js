import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const projectApi = createApi({
  reducerPath: 'projectApi',
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
    getProjects: builder.query({
      query: () => '/projects',
    }),
  }),
});

export const { useGetprojectsQuery } = projectApi;
export default projectApi;