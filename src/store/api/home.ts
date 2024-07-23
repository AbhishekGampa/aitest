import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log("process.env.LOCAL_URL: ", process.env.NEXT_PUBLIC_LOCAL_URL);

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_LOCAL_URL,
  prepareHeaders: (headers) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NjM3YjQ1NGMyNjhmODkxZjYyYjdjMzkiLCJpYXQiOjE3MjE3MTI4NjIsIm5iZiI6MTcyMTcxMjg2MiwianRpIjoiZDI3N2UwYzItYWE3Ny00MjdlLWEyZDQtOWQ1MjA2NGQ5M2M1IiwiZXhwIjoxNzIxNzk5MjYyLCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ.PpFQzh_sbQ61lpfXeHe-jLTFZRAaCD1ggRoJ-osDypo";
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
