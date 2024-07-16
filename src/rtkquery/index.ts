import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const NEXT_PUBLIC_LOCAL_URL = process.env.NEXT_PUBLIC_LOCAL_URL;
console.log("BASE_URL: ", NEXT_PUBLIC_LOCAL_URL);

const baseQuery = fetchBaseQuery({
  baseUrl: NEXT_PUBLIC_LOCAL_URL,
  prepareHeaders: (headers) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NjM3YjQ1NGMyNjhmODkxZjYyYjdjMzkiLCJpYXQiOjE3MjExMTMwNzUsIm5iZiI6MTcyMTExMzA3NSwianRpIjoiMWNlOGYxZTUtYTgyNy00YWNhLTg4ZjktNjQ2YTI1OTVmZmFjIiwiZXhwIjoxNzIxMTk5NDc1LCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ.auqdFeab4_58aJ95jxNLEvGNLwueH5bl90KJaEL72_8";
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["chats"],
  baseQuery,
  endpoints: () => ({}),
});
