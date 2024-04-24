import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const inventoryApi = createApi({
  reducerPath: "inventoryApi",
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

    getInventory: builder.query({
      query: () => "/inventory",
    }),

    addInventory: builder.mutation({
        query: (newInventory) => ({
          url: '/inventory',
          method: 'POST',
          body: newInventory,
        }),
      }),

    deleteInventory: builder.mutation({
      query:(empId)=>({
        url:`/inventory/${empId}`,
        method:"DELETE",
      })
    })
    
  }),

});

export const { useGetInventoryQuery, useAddInventoryMutation,useDeleteInventoryMutation } = inventoryApi;
export default inventoryApi;
