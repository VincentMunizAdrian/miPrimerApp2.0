import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { cloud_storage } from '../Database/firebaseConfig'

export const storageApi = createApi({
    reducerPath: 'storageApi',
    baseQuery: fetchBaseQuery({baseUrl: cloud_storage}),
    endpoints: (builder) => ({
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
    })
})

export const {
    useGetProfileImageQuery,
    usePostProfileImageMutation,
} = storageApi