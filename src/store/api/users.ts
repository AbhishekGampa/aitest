import { apiSlice } from "./index";

const userApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "users/?page=1&limit=10",
        method: "GET",
      }),
      providesTags: ["users"],
    }),
  }),
});

export const { useGetUsersQuery } = userApis;
