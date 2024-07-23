import { apiSlice } from "./index";

const categoryApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "categories?page=1&limit=10",
        method: "GET",
      }),
      providesTags: ["categories"],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApis;
