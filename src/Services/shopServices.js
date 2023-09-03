import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { realtime_database_url } from '../Database/firebaseConfig'

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({baseUrl: realtime_database_url}),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => 'categories.json'
        }),
        getProducts: builder.query({
            query: () => 'products.json'
        }),
        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (response) => {
                const productsTransformed = Object.values(response)
                return (productsTransformed)
            }
        }),
        getProductsById: builder.query({
            query: (productId) => `products.json?orderBy="id"&equalTo="${productId}"`,
            transformResponse: (response) =>{
                const productsTransformed = Object.values(response).pop()
                return (productsTransformed)
            }
        }),
        makingOrder: builder.mutation({
            query: (preOrder) => ({
                url: 'preOrders.json',
                method: 'POST',
                body: preOrder
            })
        }),
        postCart: builder.mutation({
            query: (order) => ({
                url: 'orders.json',
                method: 'POST',
                body: order
            })
        }),
        getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
        }),
        postProfileImage: builder.mutation({
            query: ({image, localId}) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image: image
                },
            }),
        }),
        getUserLocation: builder.query({
            query: (localId) => `locations/${localId}.json`,
        }),
        postUserLocation: builder.mutation({
            query: ({location, localId}) => ({
                url: `location/${localId}.json`,
                method: "PUT",
                body: {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    adress: location.address
                }
            })
        }),
    })
})

export const {
    useGetCategoriesQuery,
    useGetProductsQuery,
    useGetProductsByCategoryQuery,
    useGetProductsByIdQuery,
    useMakingOrderMutation,
    usePostCartMutation,
    useGetProfileImageQuery,
    usePostProfileImageMutation,
    useGetUserLocationQuery,
    usePostUserLocationMutation,
} = shopApi