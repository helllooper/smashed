import {MERCH_URL} from "../constants";
import {apiSlice} from "./apiSlice";

export const merchApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        getMerch : builder.query({
            query: () => ({
                url:MERCH_URL
            }),
            keepUnusedDataFor: 5
        }),
        getMerchDetails: builder.query({
            query:(productId) => ({
                url:`${MERCH_URL}/${productId}`,
                keepUnusedDataFor:5
            })
        })
    })
})

export const {useGetMerchQuery, useGetMerchDetailsQuery} = merchApiSlice
