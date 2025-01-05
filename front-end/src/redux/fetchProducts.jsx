// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const ProductApi = createApi( {
  reducerPath: 'ProductApi',
  baseQuery: fetchBaseQuery( { baseUrl: `${ import.meta.env.VITE_BASE_URL}` } ),
  endpoints: ( builder ) => ( {
    getProductByName: builder.query( {
      query: ( name ) => `${ name }`,
    } ),
  } ),
} )

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductByNameQuery } = ProductApi