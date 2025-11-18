import { fetchBaseQuery } from "@reduxjs/toolkit/query";


export type TLoginResponse = {

    user: {
        user_id: number,
        first_name: string,
        last_name: string,
        email:string,
        phone_number: string,
        role: string
    }
}

type LoginInput = {
    email: string;
    password: string;
} 

export const loginAPI = createApi({
    reducePath: 'loginAPI'
    baseQuery: fetchBaseQuery({})
    tagTypes: ['Login'],
    endpoints:( builder) => ({
        loginUser: builder.mutation<TLoginResponse, LoginResponse
    })
})