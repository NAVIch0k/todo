import Head from 'next/head'
import React from 'react'

const Layout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </>
    )
}

export default Layout