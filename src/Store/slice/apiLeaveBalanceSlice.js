import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const leaveBalanceApi = createApi({
  reducerPath: "leaveBalanceApi",
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
    getRemainingBalance: builder.query({
      query: (employeeId) => `/leave/remaining-balance/${employeeId}`,
    }),

    getWorkFromHomeBalance: builder.query({
      query: (employeeId) => `/leave/remaining-balance/work-from-home/${employeeId}`,
    }),

    getAnnunalLeaveBalance: builder.query({
      query: () => "/holidays/remaining-holidays",
    }),

    getPendingRequests: builder.query({
      query: () => `/leave/employees/pending-requests`,
    }),

    updateStatus: builder.mutation({
      query: ({ id, updatedLeaveStatus }) => ({
        url: `/leave/${id}/status`,
        method: 'PUT',
        body:{updatedLeaveStatus},
      }),
      // invalidatesTags: [{ data: 'Employees' }]
    }),
  }),
});

export const { useGetRemainingBalanceQuery,useGetWorkFromHomeBalanceQuery, useGetAnnunalLeaveBalanceQuery ,useGetPendingRequestsQuery,useUpdateStatusMutation} = leaveBalanceApi;
export default leaveBalanceApi;
