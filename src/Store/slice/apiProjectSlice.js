import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("authToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/project",
    }),

    getProjectById: builder.query({
      query: (projectId) => `/project/${projectId}`,
    }),

    addProject: builder.mutation({
      query: (newProject) => ({
        url: "/project",
        method: "POST",
        body: newProject,
      }),
    }),

    deleteProject: builder.mutation({
      query: (projectId) => ({
        url: `/project/${projectId}`,
        method: "DELETE",
      }),
    }),

    assignProject:builder.mutation({
      query:(projectId)=>({
        url:"/project/assign_project",
        method:"POST",
        body:projectId
      })
    })
  }),
});

export const {
  useGetProjectsQuery,
  useAddProjectMutation,
  useDeleteProjectMutation,
  useGetProjectByIdQuery,
  useAssignProjectMutation
} = projectApi;
export default projectApi;