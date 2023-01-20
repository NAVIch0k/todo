import { useQuery } from 'react-query'
import { TodoServices } from '../../../services/Todo/Todo.service'

const useTodos = () => {
    return useQuery(
        ['todos'],
        () => TodoServices.getAllTodo(),
        {
            select: (data) => (data.slice(0, 5))
        }
    )
}

export default useTodos
