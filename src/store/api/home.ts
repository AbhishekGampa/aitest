import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log("process.env.LOCAL_URL: ", process.env.NEXT_PUBLIC_LOCAL_URL);

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_LOCAL_URL,
  prepareHeaders: (headers) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NjM3YjQ1NGMyNjhmODkxZjYyYjdjMzkiLCJpYXQiOjE3MjEzMTA0NjUsIm5iZiI6MTcyMTMxMDQ2NSwianRpIjoiNjQ1ZDk1OTQtM2NiYy00YmVjLTg0NGYtMGUzZjBiOWVhZDExIiwiZXhwIjoxNzIxMzk2ODY1LCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ._L-cR06uMtF8AlZDDtS7tR_QAbvQXgVs3xY6pp7Vk0c";
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
