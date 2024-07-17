
import { apiSlice } from "./index";

const applicationsapis = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getApplications: builder.query({
          query: () => ({
            url: "applications",
            method: "GET",
          }),
        }),
      }),
});

export const { useGetApplicationsQuery} = applicationsapis;

