import React, { useState, useEffect } from 'react'

const ShowList = ({ getItem }) => {
    const [item, setItem] = useState([])

    useEffect(() => {
        setItem(getItem)
        console.log('calling setItem')
    }, [getItem])
    return (
        <div>
            {item.map((i) => (
                <p>{i}</p>
            ))}
        </div>
    )
}
export default ShowList
