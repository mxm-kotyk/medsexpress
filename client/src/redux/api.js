import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://medsexpress-server-8f3b8145280d.herokuapp.com/api",
    baseUrl: "https://medsexpress.onrender.com/api",
  }),
  endpoints: (builder) => ({
    getStores: builder.query({
      query: () => "/stores",
      transformResponse: (response) => response.data,
    }),
    getDrugs: builder.query({
      query: () => "/drugs",
      transformResponse: (response) => response.data,
    }),
    submitOrder: builder.mutation({
      query: (orderData) => ({
        url: "/orders",
        method: "POST",
        body: orderData.payload,
      }),
    }),
  }),
});

export const { useGetStoresQuery, useGetDrugsQuery, useSubmitOrderMutation } =
  api;
