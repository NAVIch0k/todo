import { Checkbox, Stack } from '@chakra-ui/react'
import s from './TodoList.module.scss'
import useTodos from './UseTodos'
import { Spinner } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { useState } from 'react'
import { useMutation } from 'react-query'

const TodoList = () => {

    const { data, isLoading } = useTodos()
    const [name, setName] = useState()

    const { mutate } = useMutation(
        'create-todo',
        () =>
            console.log(123),
        {
            onSuccess() {
                data.push({ title: name, completed: false, key: (data[data.length - 1].id + 1) })
            }
        }
    )

    const addTodo = () => {
        mutate(name)
    }

    return (
        <div className={s.cont}>
            {
                isLoading ?
                    <Spinner /> :
                    <Stack spacing={3} direction='column' >
                        {
                            data.map(e => (<Checkbox defaultChecked={e.completed} size='lg' key={e.id}>{e.title}</Checkbox>))
                        }
                    </Stack>
            }
            <Stack spacing={3} direction='column'>
                <Input placeholder='name todo' value={name} onChange={e => setName(e.target.value)} />
                <Button colorScheme='blue' onClick={addTodo}>Add todod</Button>
            </Stack>
        </div>
    )
}

export default TodoList