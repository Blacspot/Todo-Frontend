import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiDomain } from "../../utils/ApiDomain";

export type TypeTodo = {
    todoid: number;
    todo_name: string;
    description: string;
    created_at: string;
    due_date: string;
    user_id:number;
    isCompleted: boolean
}

export const todoAPI = createApi({
    reducerPath: 'todosAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: ApiDomain
    }),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        createTodo: builder.mutation<TypeTodo, Partial<TypeTodo>({
            query: (newTodo) => ({
                url:'/todos',
                method: 'POST',
                body:newTodo
            })
        })
    })
})