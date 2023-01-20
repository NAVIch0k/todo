import React from 'react'

const Main = () => {
    return (
        <div>main</div>
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