import { apiSlice } from "./index";

const chatapis = apiSlice.injectEndpoints({
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
    getChatId: builder.query({
      query: (id) => ({
        url: `chats?expert_id=${id}&page=1&limit=10`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetExpertsQuery, useGetExpertByIdQuery, useGetChatIdQuery } =
  chatapis;
