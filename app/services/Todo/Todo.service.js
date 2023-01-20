import { instance } from "../../api/instance";

export const TodoServices = {
    async getAllTodo() {
        const res = await instance.get('todos')
        return res.data
    }
}