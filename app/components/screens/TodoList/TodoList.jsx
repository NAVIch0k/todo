import { Checkbox, Stack } from '@chakra-ui/react'
import s from './TodoList.module.scss'
import useTodos from './UseTodos'
import { Spinner } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'

const TodoList = () => {
  const { data, isLoading } = useTodos()
  const [name, setName] = useState('')
  const [todos, setTodos] = useState([])
  useEffect(()=>{
    if(data){
        setTodos(data)
    }
  },[data])

  const { mutate } = useMutation('create-todo', (el) => console.log(el), {
    onSuccess() {
      setTodos((e) => [
        ...e,
        { title: name, completed: false, key: data[data.length - 1].id + 1 }
      ])
      setName('')
    }
  })

  const addTodo = () => {
    mutate(name)
  }

  return (
    <div className={s.cont}>
      {isLoading ? (
        <Spinner />
      ) : (
        <Stack spacing={3} direction='column'>
          {todos?.map((e) => (
            <Checkbox defaultChecked={e.completed} size='lg' key={e.id}>
              {e.title}
            </Checkbox>
          ))}
        </Stack>
      )}
      <Stack spacing={3} direction='column'>
        <Input
          placeholder='name todo'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button colorScheme='blue' onClick={addTodo}>
          Add todod
        </Button>
      </Stack>
    </div>
  )
}

export default TodoList
