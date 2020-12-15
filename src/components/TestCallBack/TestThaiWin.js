import { findByDisplayValue } from '@testing-library/react'
import React, { useState, useEffect } from 'react'
import enterThaiWin from '../../api/enterThaiWin'
import exitThaiWin from '../../api/exitThaiWin'

const useThaiWin = () => {
    const [isStay, setIsStay] = useState(false)
    const enter = () => {}
    const exit = () => {}
    useEffect(() => {})

    return (
        <div>
            Test
            <button onClick={enter}>enter</button>
            <button onClick={exit}>exit</button>
        </div>
    )
}

export default useThaiWin
