import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
console.log("BASE_URL: ", NEXT_PUBLIC_BASE_URL);

const baseQuery = fetchBaseQuery({
  baseUrl: NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NjM3YjQ1NGMyNjhmODkxZjYyYjdjMzkiLCJpYXQiOjE3MjEzOTczODksIm5iZiI6MTcyMTM5NzM4OSwianRpIjoiNjMzNjM4MDAtMGE3My00NGFiLTgyMDEtOTRiMDZjMWEyMzczIiwiZXhwIjoxNzIxNDgzNzg5LCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ.OOgDJSMGvHVzoWwG5jT0p4k7KpJOhTs7G7BrKbcaNzM";
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
