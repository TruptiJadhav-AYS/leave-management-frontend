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
      query: () => '/project',
    }),
    addEmployee: builder.mutation({
        query: (newProject) => ({
          url: '/project',
          method: 'POST',
          body: newProject,
        }),
      }),
      updateEmployee: builder.mutation({
        query: ({ projectId, ...updateData }) => ({
          url: `/employees/${projectId}`,
          method: 'PATCH',  
          body: updateData,
        }),
      }),
    //   deleteEmployee: builder.mutation({
    //     query: (projectId) => ({
    //       url: `/project/${projectId}`,
    //       method: 'DELETE',
    //     }),
    //   })
  }),
});

export const { useGetProjectsQuery} = projectApi;
export default projectApi;