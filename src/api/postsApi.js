import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'http://localhost:5000'

export const postsApi = createApi({
    reducerPath: 'post',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),

    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => {
                return {
                    url: '/blogs',
                    method: 'GET'
                }
            }
        }),

        getOne: builder.query({
            query: ({id}) => {
                return {
                    url: `/blogs/${id}`,
                    method: 'GET'
                }
            }
        }),

        createPost: builder.mutation({
            query: ({urlImage, title, textArea}) => {
                return {
                    url: '/blogs',
                    method: 'POST',
                    body: {
                        image: urlImage,
                        title: title,
                        text: textArea
                    }
                }
            }
        }),

        removePost: builder.mutation({
            query: ({id}) => {
                return {
                    url: `/blogs/${id}`,
                    method: 'DELETE'
                }
            }
        })
    })
})

export const {useGetPostsQuery, useGetOneQuery, useCreatePostMutation, useRemovePostMutation} = postsApi