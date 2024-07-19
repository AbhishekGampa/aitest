import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
console.log("NEXT_PUBLIC_BASE_URL: ", NEXT_PUBLIC_BASE_URL);

const baseQuery = fetchBaseQuery({
  baseUrl: NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NjM3YjQ1NGMyNjhmODkxZjYyYjdjMzkiLCJpYXQiOjE3MjEzMTA0NjUsIm5iZiI6MTcyMTMxMDQ2NSwianRpIjoiNjQ1ZDk1OTQtM2NiYy00YmVjLTg0NGYtMGUzZjBiOWVhZDExIiwiZXhwIjoxNzIxMzk2ODY1LCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ._L-cR06uMtF8AlZDDtS7tR_QAbvQXgVs3xY6pp7Vk0c";
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
