import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const NEXT_PUBLIC_LOCAL_URL = process.env.NEXT_PUBLIC_LOCAL_URL;
console.log("BASE_URL: ", NEXT_PUBLIC_LOCAL_URL);

const baseQuery = fetchBaseQuery({
  baseUrl: NEXT_PUBLIC_LOCAL_URL,
  prepareHeaders: (headers) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NjM3YjQ1NGMyNjhmODkxZjYyYjdjMzkiLCJpYXQiOjE3MjEzMDgyOTcsIm5iZiI6MTcyMTMwODI5NywianRpIjoiNzA0OTQ3NmQtODc0OC00NWQ4LWEwMjYtYjI5ZTY2YjViMTU1IiwiZXhwIjoxNzIxMzk0Njk3LCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ.rP9SO-bTK4ZOactMai6FyjkoY7fqCTGZPDLcvFy0z2Q";
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["chatexperts","chatexpertbyid","chatid"],
  baseQuery,
  endpoints: () => ({}),
});
