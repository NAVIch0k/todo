import '../app/styles/global.scss'

export default function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page)

    return getLayout(<Component {...pageProps} />)
}