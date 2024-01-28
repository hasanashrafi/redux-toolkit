import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, selectCounter } from '../features/counter/counterSlice';
import { useState } from 'react';

function Counter() {
    const [value, setValue] = useState(2)

    const counter = useSelector(selectCounter)
    const dispatch = useDispatch(increment, decrement, incrementByAmount)

    return (
        <div>
            <h2>Counter is : {counter}</h2>
            <button onClick={() => dispatch(increment())}>Increase +</button>
            <button onClick={() => dispatch(decrement())}>Decrease -</button>
            <button onClick={() => dispatch(incrementByAmount(+value))}>increment By Amount +5</button>
            <input type='number' value={value} onChange={e => setValue(e.target.value)} />
        </div>
    )
}

export default Counter