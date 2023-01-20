import { create } from "zustand";


export const UseTodosStore = create((set) => ({
    todos: [],
    getAllTodo: (data) => set(() => ({ todos: data })),
    addTodo: (data) => set((state) => ({
        todos: [...todos, {
            title: data, completed: false, id: (state[state.length - 1].id + 1)
        }]
    }))
}))