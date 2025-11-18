import { ApiDomain } from "../../utils/ApiDomain";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export type TUser = {
    userid: number
    first_name: string
    last_name: string
    email:string 
    phone_number: string
    password: string
    role: string
}

export const usersAPI = createApi ({
    reducerPath: 'usersAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: ApiDomain
    }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        createUsers : builder.mutation<TUser, Partial<TUser>>({
            query: (newUser) => ({
                url: '/users',
                method:'POST',
                body:newUser
            }),
            invalidatesTags: ['Users']
        }),
        verifyUser: builder.mutation<{ message: string }, { email: string, code: string }>({
            query: (data) => ({
                url: '/verify',
                method: 'POST'
            })
        })
    })
})