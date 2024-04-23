import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const holidaysApi = createApi({
  reducerPath: "holidaysApi",
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
    getHolidays: builder.query({
      query: () => "/holidays",
    }),

    addHoliday: builder.mutation({
      query: ({ data1, file }) => ({
        url: "/holidays/upload",
        method: "POST",
        body: formData(data1, file),
      }),
    }),
  }),
});

export const { useGetHolidaysQuery } = holidaysApi;
export default holidaysApi;

function formData(data1, file) {
  const formData = new FormData();
  formData.append("data1", JSON.stringify(data1));
  formData.append("file", file);
  return formData;
}