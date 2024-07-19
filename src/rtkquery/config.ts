import { apiSlice } from "./index";

const configApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConfig: builder.query({
      query: () => ({
        url: "configs",
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }),
    }),
    updateConfig: builder.mutation({
      query: (configData) => ({
        url: "configs",
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: configData,
      }),
    }),
  }),
});

export const { useGetConfigQuery, useUpdateConfigMutation } = configApis;
