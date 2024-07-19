import { apiSlice } from "./index";

const chatapis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExperts: builder.query({
      providesTags: ["chatexperts"],
      query: () => ({
        url: "experts",
        method: "GET",
      }),
    }),
    getExpertById: builder.query({
      providesTags: (result, error, arg) => {
        console.log("arg: ", arg);
        console.log("result: ", result);
        return result
          ? [{ type: "chatexpertbyid", id: result.id }]
          : [{ type: "chatexpertbyid", id: arg }];
      },
      query: (id) => `experts/${id}`,
    }),
    getChatId: builder.query({
      providesTags: (result, error, arg) => {
        console.log("arg: ", arg);
        console.log("result: ", result);
        return result
          ? [{ type: "chatid", id: result.id }]
          : [{ type: "chatid", id: arg }];
      },
      query: (id) => ({
        url: `chats?expert_id=${id}&page=1&limit=10`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetExpertsQuery, useGetExpertByIdQuery, useGetChatIdQuery } =
  chatapis;
