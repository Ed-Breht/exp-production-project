import React, {useState} from 'react';
import classes from "./Counter.module.scss";
export const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div className={classes.button}>
            <button onClick={increment} >increment</button>
            <button onClick={decrement} >decrement</button>
            <div>{count}</div>
        </div>
    );
}
