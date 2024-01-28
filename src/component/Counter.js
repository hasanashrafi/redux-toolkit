import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectCounter } from '../features/counter/counterSlice';

function Counter() {
    const counter = useSelector(selectCounter)
    const dispatch = useDispatch(increment, decrement)

    return (
        <div>
           
            <h2>counter is: {counter}</h2>
            <button onClick={() => dispatch(increment())}>Increase +</button>
            <button onClick={() => dispatch(decrement())}>Decrease -</button>
        </div>
    )
}

export default Counter