import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
console.log("BASE_URL: ", NEXT_PUBLIC_BASE_URL);

const baseQuery = fetchBaseQuery({
  baseUrl: NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NjM3YjQ1NGMyNjhmODkxZjYyYjdjMzkiLCJpYXQiOjE3MjE3MTUzNTMsIm5iZiI6MTcyMTcxNTM1MywianRpIjoiZDJkYmQzYTctY2E2Mi00YWQ2LWJkNTAtYWVjYjFlYzVmOWU1IiwiZXhwIjoxNzIxODAxNzUzLCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ.ZSq9jhfViW2xhST8h7_A4XURyLcvCpOnArb1tmRKVGs";
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
    "categories",
    "users"
  ],
  baseQuery,
  endpoints: () => ({}),
});
