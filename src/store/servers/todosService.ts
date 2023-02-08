import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type PostResponse = {
  id: number;
  title: string;
  createAt: number;
  isCompleted: boolean;
};

type Post = Omit<PostResponse, "id">;

export const todosService = createApi({
  reducerPath: "todosApi",
  tagTypes: ["Todos"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3002" }),
  endpoints: (builder) => ({
    getTodos: builder.query<PostResponse[], void>({
      query: () => `todos`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Todos", id } as const)),
              { type: "Todos", id: "LIST" },
            ]
          : [{ type: "Todos", id: "LIST" }],
    }),

    addTodo: builder.mutation<PostResponse, Post>({
      query: (body) => ({
        url: `todos`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),

    updateTodo: builder.mutation<PostResponse, PostResponse>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `todos/${id}`,
          method: "PUT",
          body,
        };
      },

      invalidatesTags: (result, error, { id }) => [{ type: "Todos", id }],
    }),
    deleteTodo: builder.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `todos/${id}`,
          method: "DELETE",
        };
      },

      invalidatesTags: (result, error, id) => [{ type: "Todos", id }],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosService;
