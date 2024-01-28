import { useSelector } from 'react-redux';

function Counter() {
    const store = useSelector((store) => store.counter.counterValue)


    return (
        <div>
            Counter
            <h2>counter is: {store}</h2>
        </div>
    )
}

export default Counter