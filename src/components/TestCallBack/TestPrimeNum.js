import React, { useState, useEffect } from 'react'
import usePrimeNumber from '../../hooks/usePrimeNumber/usePrimeNumber'

const PrimeNumber = ({ getItem }) => {
    const [number, setNum] = useState(0)
    const [isPrime, calPrime, num] = usePrimeNumber()

    const calNumber = () => {
        calPrime(number)
    }
    const eventOnChange = (params) => {
        setNum(params)
    }

    useEffect(() => {
        console.log(isPrime)
    }, [isPrime])

    return (
        <div>
            <input onChange={(e) => eventOnChange(e.target.value)}></input>
            <button onClick={calNumber}>cal number</button>
            <p>{num}</p>
        </div>
    )
}
export default PrimeNumber
