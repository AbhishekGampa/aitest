import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log("process.env.LOCAL_URL: ", process.env.NEXT_PUBLIC_LOCAL_URL);

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_LOCAL_URL,
  prepareHeaders: (headers) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NjM3YjQ1NGMyNjhmODkxZjYyYjdjMzkiLCJpYXQiOjE3MjE2MjYxNjQsIm5iZiI6MTcyMTYyNjE2NCwianRpIjoiYTY4MjkxYWItNmE1Ny00NDI5LWFlMmItYmIzNGRmYTliNjU3IiwiZXhwIjoxNzIxNzEyNTY0LCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ.exwoNjIeydo1RdNw3dGBsmQhaxhbc6AaVjij1CyScTA";
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const homeapis = createApi({
  reducerPath: "dashboard",
  tagTypes: ["dashboard"],
  baseQuery,
  endpoints: (builder) => ({
    getDashboardData: builder.query({
      providesTags: ["dashboard"],
      query: () => "/dashboard",
    }),
  }),
});

export const { useGetDashboardDataQuery } = homeapis;
