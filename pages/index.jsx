import Layout from '../app/components/layout/Layout'
import TodoList from '../app/components/screens/TodoList/TodoList'

const Main = () => {
    return (
        <TodoList />
    )
}

Main.getLayout = (page) => {
    return (
        <Layout title={'Главная страница'}>
            {page}
        </Layout>
    )
}

export default Main