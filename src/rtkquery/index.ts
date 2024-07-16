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

export const api = createApi({
  baseQuery,
  endpoints: (builder) => ({
    getExperts: builder.query({
      query: () => ({
        url: "experts",
        method: "GET",
      }),
    }),
    getExpertById: builder.query({
      query: (id) => `experts/${id}`,
    }),
    getChatHistory: builder.query({
      query: (id) => ({
        url : `chats?expert_id=${id}&page=1&limit=10`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetExpertsQuery, useGetExpertByIdQuery, useGetChatHistoryQuery } = api;
