import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const leaveReqApi = createApi({
  reducerPath: "leaveReqApi",
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

    getLeavesById: builder.query({
      query: (emplyeeId) => `/leave/${emplyeeId}/requests`,
      providesTags:[{ data: 'leave' }]
    }),

    applyLeave: builder.mutation({
      query: (leave) => ({
        url: "/leave",
        method: "POST",
        body: leave,
      }),
      invalidatesTags: [{ data: 'Project' }]
    }),
    }),
});

export const {
    useApplyLeaveMutation,
    useGetLeavesByIdQuery,
} = leaveReqApi;
export default leaveReqApi;