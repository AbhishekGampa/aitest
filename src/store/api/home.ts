import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log("process.env.LOCAL_URL: ", process.env.NEXT_PUBLIC_LOCAL_URL);

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_LOCAL_URL,
  prepareHeaders: (headers) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NjM3YjQ1NGMyNjhmODkxZjYyYjdjMzkiLCJpYXQiOjE3MjEzOTczODksIm5iZiI6MTcyMTM5NzM4OSwianRpIjoiNjMzNjM4MDAtMGE3My00NGFiLTgyMDEtOTRiMDZjMWEyMzczIiwiZXhwIjoxNzIxNDgzNzg5LCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ.OOgDJSMGvHVzoWwG5jT0p4k7KpJOhTs7G7BrKbcaNzM";
    headers.set("Authorization", `Bearer ${token}`);
    headers.set("Content-Type", "application/json");
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
