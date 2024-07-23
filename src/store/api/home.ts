import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log("process.env.LOCAL_URL: ", process.env.NEXT_PUBLIC_LOCAL_URL);

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_LOCAL_URL,
  prepareHeaders: (headers) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NjM3YjQ1NGMyNjhmODkxZjYyYjdjMzkiLCJpYXQiOjE3MjE3MTUzNTMsIm5iZiI6MTcyMTcxNTM1MywianRpIjoiZDJkYmQzYTctY2E2Mi00YWQ2LWJkNTAtYWVjYjFlYzVmOWU1IiwiZXhwIjoxNzIxODAxNzUzLCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ.ZSq9jhfViW2xhST8h7_A4XURyLcvCpOnArb1tmRKVGs";
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const homeapis = createApi({
  reducerPath: "dashboard",
  tagTypes: ["dashboard","messagesbychatid"],
  baseQuery,
  endpoints: (builder) => ({
    getDashboardData: builder.query({
      providesTags: ["dashboard"],
      query: () => "/dashboard",
    }),
  }),
});

export const { useGetDashboardDataQuery } = homeapis;
