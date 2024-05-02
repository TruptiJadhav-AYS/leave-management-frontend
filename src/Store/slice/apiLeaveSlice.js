import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const leaveApi = createApi({
  reducerPath: "leaveApi",
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
    // getProjects: builder.query({
    //   query: () => "/project",
    // }),

    // getleaveById: builder.query({
    //   query: (projectId) => `/project/${projectId}`,
    // }),

    addLeave: builder.mutation({
      query: (newLeave) => ({
        url: "/leave",
        method: "POST",
        body: newLeave,
      }),
    }),

    // deleteProject: builder.mutation({
    //   query: (projectId) => ({
    //     url: `/project/${projectId}`,
    //     method: "DELETE",
    //   }),
    // }),

    // assignProject:builder.mutation({
    //   query:(projectId)=>({
    //     url:"/project/assign_project",
    //     method:"POST",
    //     body:projectId
    //   })
    // }),

  updateLeave: builder.mutation({
      query: ({ id, updatedLeaveStatus }) => ({
        url: `/leave/${id}/status`,
        method: 'PUT',
        body: updatedLeaveStatus,
      }),
      invalidatesTags: [{ data: 'leave' }]
    }),
  }),
});

export const {
  useAddLeaveMutation,
//   useDeleteProjectMutation,
//   useGetProjectByIdQuery,
//   useAssignProjectMutation,
useUpdateLeaveMutation,
} = leaveApi;
export default leaveApi;