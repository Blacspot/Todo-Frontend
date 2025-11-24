import { ApiDomain } from "../../utils/ApiDomain";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export type TUser = {
    message: string
    userid: number
    first_name: string
    last_name: string
    email: string
    phone_number: string
    password: string
    role: string
    isVerified: boolean
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
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Users']
        }),
        getUsers: builder.query<TUser[], void>({
            query: () => '/users',
            providesTags: ['Users']
        }),
         updateUserRole: builder.mutation<TUser, Partial<TUser> & { id: number }>({
            query: (user) => ({
                url: `/users/role/${user.id}`,
                method: 'PUT',
                body: user,
            }),
            invalidatesTags: ['Users']
        }),
        updateUserProfile: builder.mutation<TUser, Partial<TUser> & { id: number }>({
            query: (user) => ({
                url: `/users/profile/${user.id}`,
                method: 'PUT',
                body: user,
            }),
            invalidatesTags: ['Users']
        }),
        getUserById: builder.query<TUser, number>({
            query: (id) => `/users/${id}`,
        }),



    })
})