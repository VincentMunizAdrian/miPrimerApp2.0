import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { realtime_database_url } from "../Database/firebaseConfig";

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({ baseUrl: realtime_database_url }),
    endpoints: (builder) => ({
        getPreOrders: builder.query({
            query: (email) => `preOrders.json?orderBy="user"&equalTo="${email}"`,
            transformResponse: (response) => {
                const productsTransformed = Object.values(response)
                return (productsTransformed)
            }
        }),
        getOrders: builder.query({
            query: (email) => `orders.json?orderBy="user"&equalTo="${email}"`,
            transformResponse: (response) => {
                const ordersTransformed = Object.values(response)
                return (ordersTransformed)
            }
        }),
    })
})

export const {
    useGetPreOrdersQuery,
    useGetOrdersQuery,
} = orderApi