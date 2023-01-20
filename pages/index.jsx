import React from 'react'

const Main = () => {
    return (
        <h2>Main</h2>
    )
}

Main.getLayout = (page) => {
    return (
        <div>
            {page}
        </div>
    )
}

export default Main