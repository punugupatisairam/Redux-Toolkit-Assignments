// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const usersdataApi = createApi({
  reducerPath: "usersdataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getAllusers: builder.query({
      query: (values) =>
        `/users/?username=${values.username}&password=${values.password}`,
    }),
    getReg: builder.mutation({
      query: (newreg) => {
        return {
          method: "POST",
          url: "/RegisterDetails",
          body: newreg,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllusersQuery, useGetRegMutation } = usersdataApi;
