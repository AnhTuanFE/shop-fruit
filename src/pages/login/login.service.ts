import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "src/types/login.type";

export const loginApi = createApi({
  reducerPath: "loginApi",
  tagTypes: ["logins"],
  keepUnusedDataFor: 10,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://baloshop-api.vercel.app/",
  }),
  endpoints: (build) => ({
    login: build.mutation<IUser, { email: string; password: string }>({
      query(data) {
        return {
          url: "/api/users/login",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});
export const { useLoginMutation } = loginApi;
