import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
  ],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id: string) => `/general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: builder.query({
      query: () => "/client/products",
      providesTags: ["Products"],
    }),
    getCustomers: builder.query({
      query: () => "/client/customers",
      providesTags: ["Customers"],
    }),
    getTransactions: builder.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "/client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getGeography: builder.query({
      query: () => "/client/geography",
      providesTags: ["Geography"],
    }),
    getSales: builder.query({
      query: () => "/sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: builder.query({
      query: () => "/management/admins",
      providesTags: ["Admins"],
    }),
    getPerformance: builder.query({
      query: (id: string) => `/management/performance/${id}`,
      providesTags: ["Performance"],
    }),
    getDashboard: builder.query({
      query: () => "/general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetPerformanceQuery,
  useGetDashboardQuery,
} = api;
