import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
console.log("BASE_URL: ", NEXT_PUBLIC_BASE_URL);

const baseQuery = fetchBaseQuery({
    baseUrl: NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers) => {
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NjM3YjQ1NGMyNjhmODkxZjY" +
        "yYjdjMzkiLCJpYXQiOjE3MjEwNDk1NzksIm5iZiI6MTcyMTA0OTU3OSwianRpIjoiOGYzZDQzMGItOWZiMi00YmQ" +
        "zLThmYmQtYjI1ODgzNmE0OWNmIiwiZXhwIjoxNzIxMTM1OTc5LCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ.suhMXHPv4pUD98MCW8YiMmgS2vocUDpndob7UPrQz3U";
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