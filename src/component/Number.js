import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, selectNumber } from "../features/number/numberSlice"



function Number() {

    const number = useSelector(selectNumber)
    const dispatch = useDispatch(increment, decrement)

    return (
        <div>
            <h2>number is : {number}</h2>
            <button onClick={() => dispatch(increment())}>Increase +</button>
            <button onClick={() => dispatch(decrement())}>Decrease -</button>
        </div>
    )
}


export default Number