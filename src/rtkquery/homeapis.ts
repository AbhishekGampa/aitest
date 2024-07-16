import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log("process.env.LOCAL_URL: ", process.env.NEXT_PUBLIC_LOCAL_URL);

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_LOCAL_URL,
  prepareHeaders: (headers) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NjM3YjQ1NGMyNjhmODkxZjYyYjdjMzkiLCJpYXQiOjE3MjExMTMwNzUsIm5iZiI6MTcyMTExMzA3NSwianRpIjoiMWNlOGYxZTUtYTgyNy00YWNhLTg4ZjktNjQ2YTI1OTVmZmFjIiwiZXhwIjoxNzIxMTk5NDc1LCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ.auqdFeab4_58aJ95jxNLEvGNLwueH5bl90KJaEL72_8";
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const homeapis = createApi({
  reducerPath: "dashboard",
  baseQuery,
  endpoints: (builder) => ({
    getDashboardData: builder.query({ query: () => "/dashboard" }),
  }),
});

export const { useGetDashboardDataQuery } = homeapis;
