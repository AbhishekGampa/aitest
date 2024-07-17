import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
console.log("BASE_URL: ", NEXT_PUBLIC_BASE_URL);

const baseQuery = fetchBaseQuery({
  baseUrl: NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NjM3YjQ1NGMyNjhmODkxZjYyYjdjMzkiLCJpYXQiOjE3MjEyMjE3MzIsIm5iZiI6MTcyMTIyMTczMiwianRpIjoiMTVjZDFkOTUtMTczOS00NWZjLWI5MmYtY2IzZWJkNzI0ZGZiIiwiZXhwIjoxNzIxMzA4MTMyLCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ.IDaSyx3mB4zh_lymTfv5f6FY0wOoPEyIhD66lN1zYjE";
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
