import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const historyApi = createApi({
  reducerPath: 'historyApi',
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
    
    getHistory: builder.query({
      query: (employeeId) => `/leave/${employeeId}/requests`,
    }),

    // getEmployeesById: builder.query({
    //   query: (employeeId) => `/employees/employee/${employeeId}`,
    // }),

    // addEmployee: builder.mutation({
    //   query: (newEmployee) => ({
    //     url: '/employees',
    //     method: 'POST',
    //     body: newEmployee,
    //   }),
    //   invalidatesTags:[{ data: 'Employees' }]
    // }),
    
    // updateEmployee: builder.mutation({
    //   query: ({ id, updatedEmployeeDetails }) => ({
    //     url: `/employees/${id}`,
    //     method: 'PUT',
    //     body: updatedEmployeeDetails,
    //   }),
    //   invalidatesTags: [{ data: 'Employees' }]
    // }),


  }),
  

});

export const { useGetHistoryQuery} = historyApi;
export default historyApi;
