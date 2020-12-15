import React, { useState, useEffect, useCallback } from 'react'
// import logo from './logo.svg';
import './App.css'
import ShowList from '../src/components/TestCallBack/TestCallBack'
import PrimeNumber from '../src/components/TestCallBack/TestPrimeNum'
import MyValidateForm from './components/MyValidateForm/MyValidateForm'
import TestThaiWin from './components/TestCallBack/TestThaiWin'

function App() {
    const [test, setTest] = useState(0)
    const [text, setText] = useState('')

    const onClick = () => {
        setTest(test + 1)
    }
    const eventOnChange = (params) => {
        setText(params)
    }

    const getSeqNum = useCallback(() => {
        return [test, test + 1, test + 2]
    }, [test])
    const onSubmit = (email) => {
        console.log('email')
    }

    // console.log(test)
    useEffect(() => {
        if (test % 2 === 0) {
            console.log(test)
        } else {
            console.log('hello')
        }

        return () => {
            setText('Not')
        }
    }, [test])

    useEffect(() => {
        console.log(text)
    }, [text])

    return (
        <div className="App">
            <input onChange={(e) => eventOnChange(e.target.value)}></input>
            <p>First Count : {test}</p>
            <button onClick={onClick}>+</button>
            <ShowList getItem={getSeqNum} />

            <PrimeNumber />

            <MyValidateForm handleSubmit={onSubmit} />

            <TestThaiWin />
        </div>
    )
}

export default App
