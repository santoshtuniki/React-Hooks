import React, { useContext } from "react";
import { CounterContext } from "../App";

const ComponentD = () => {

    const counterContext = useContext(CounterContext);

    return (
        <div>
            <div>ComponentD  Count: {counterContext.countState}</div>
            <button onClick={() => counterContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => counterContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => counterContext.countDispatch('reset')}>Reset</button>
        </div> 
    )
};

export default ComponentD;