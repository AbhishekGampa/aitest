import { homeapis } from "./home";

const filevaultapis = homeapis.injectEndpoints({
  endpoints: (builder) => ({
    getFileVaultData: builder.query({
      query: () => "/files?page=1&limit=10",
    }),
  }),
});

export const { useGetFileVaultDataQuery } = filevaultapis;
