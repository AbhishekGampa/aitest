import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
console.log("BASE_URL: ", NEXT_PUBLIC_BASE_URL);

const baseQuery = fetchBaseQuery({
  baseUrl: NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NjM3YjQ1NGMyNjhmODkxZjYyYjdjMzkiLCJpYXQiOjE3MjE3MTI5MTQsIm5iZiI6MTcyMTcxMjkxNCwianRpIjoiMzY3NmY2NjEtOGU1OC00NTRkLWE3NTYtNzRmYjJmYWFmNDIwIiwiZXhwIjoxNzIxNzk5MzE0LCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ.8Ecf0ap7pWczRhVkJm6P1Z1WmnQ_DlvgGIDnKalz3qI";
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
