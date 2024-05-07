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
      invalidatesTags: [{ data: 'leave' }]
    }),

    getEmpOnLeaveToday:builder.query({
      query:()=>({
        url:"/leave/employees/employees-leave-on-today"
      }),
      providesTags: [{ data: 'leave' }]
    }),

    getPendingRequest:builder.query({
      query: () => `/leave/employees/pending-requests`,
      providesTags:[{data:"leave"}]
    }),

    getPendingRequestById:builder.query({
      query: (emp_id) => `/leave/${emp_id}/pending-requests`,
      providesTags:[{data:"leave"}]
    }),

    updateLeaveStatus:builder.mutation({
      query:({ id, status }) => ({
        url: `/leave/${id}/status`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags:[{data:"leave"}]
    })
    }),
});

export const {
    useApplyLeaveMutation,
    useGetLeavesByIdQuery,
    useGetEmpOnLeaveTodayQuery,
    useGetPendingRequestQuery,
    useUpdateLeaveStatusMutation,
    useGetPendingRequestByIdQuery,
} = leaveReqApi;
export default leaveReqApi;