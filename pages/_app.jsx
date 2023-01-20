import BaseLayout from '../app/components/layout/BaseLayout'
import '../app/styles/global.scss'
import { ChakraProvider } from '@chakra-ui/react'
import ReactQueryProvider from '../app/utils/react-query'

export default function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page)

    return (
        <ChakraProvider>
            <ReactQueryProvider>
                <BaseLayout>
                    {getLayout(<Component {...pageProps} />)}
                </BaseLayout>
            </ReactQueryProvider>
        </ChakraProvider>
    )
}