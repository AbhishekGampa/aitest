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
  }),
});

export const { usePromptChatMutation } = LLMapis;
