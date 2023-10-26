import React, { useContext } from "react";
import { CounterContext } from "../App";

const ComponentF = () => {

    const counterContext = useContext(CounterContext);

    return (
        <div>
            <div>ComponentF  Count: {counterContext.countState}</div>
            <button onClick={() => counterContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => counterContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => counterContext.countDispatch('reset')}>Reset</button>
        </div> 
    )
};

export default ComponentF;