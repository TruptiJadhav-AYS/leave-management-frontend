import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const departmentApi = createApi({
  reducerPath: 'departmentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getDepartments: builder.query({
      query: () => '/department',
    }),
  }),
  
});

export const { useGetDepartmentsQuery } = departmentApi;
export default departmentApi;
