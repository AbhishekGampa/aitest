import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
console.log("BASE_URL: ", NEXT_PUBLIC_BASE_URL);

const baseQuery = fetchBaseQuery({
  baseUrl: NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NjM3YjQ1NGMyNjhmODkxZjYyYjdjMzkiLCJpYXQiOjE3MjExOTk2NDgsIm5iZiI6MTcyMTE5OTY0OCwianRpIjoiNTdiOWNiNGMtYmE2ZC00ZjQ1LWExYjEtNzQ2OWJmMThmZjQwIiwiZXhwIjoxNzIxMjg2MDQ4LCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ.u-2OBqBQtElnSY6B_C2bXpsw5NifydYbKWpxXY4ztkY";
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
