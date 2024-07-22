import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
console.log("BASE_URL: ", NEXT_PUBLIC_BASE_URL);

const baseQuery = fetchBaseQuery({
  baseUrl: NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NjM3YjQ1NGMyNjhmODkxZjYyYjdjMzkiLCJpYXQiOjE3MjE2MjU5OTUsIm5iZiI6MTcyMTYyNTk5NSwianRpIjoiOWM1MjA4YzYtNWRhMS00ZjJiLThkY2EtNzM5ZGZlM2I2MDVkIiwiZXhwIjoxNzIxNzEyMzk1LCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ.pRETaBBq8aIYQOFjG1iGrzfx0ghuihnVqTlF7-5Utfo";
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: [
    "chatexperts",
    "chatexpertbyid",
    "chatid",
    "applications",
    "prompt_chat",
  ],
  baseQuery,
  endpoints: () => ({}),
});
