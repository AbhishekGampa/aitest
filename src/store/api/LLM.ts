import { homeapis } from "./home";
import { apiSlice } from "./index";

const LLMapis = homeapis.injectEndpoints({
  endpoints: (builder) => ({
    promptChat: builder.mutation({
      query: (payload) => ({
        url: "/prompt_chat",
        body: payload,
        method: "POST",
      }),
    }),
    getMessagesByChatId: builder.query({
      providesTags: (result, error, arg) => {
        return result
          ? [{ type: "messagesbychatid", id: result.id }]
          : [{ type: "messagesbychatid", id: arg }];
      },
      query: (id) => ({
        url: `messages?chat_id=${id}&page=1&limit=10`,
        method: "GET",
      }),
    }),
  }),
});

export const { usePromptChatMutation, useGetMessagesByChatIdQuery } = LLMapis;
