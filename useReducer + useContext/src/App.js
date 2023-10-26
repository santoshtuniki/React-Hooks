import React, { createContext, useReducer } from "react";
import './App.css';

import ComponentA from './component/ComponentA';
import ComponentB from './component/ComponentB';
import ComponentC from './component/ComponentC';

export const CounterContext = createContext();

const initialState = 0;

const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
};

const App = () => {

	const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<CounterContext.Provider 
			value={{ countState: count, countDispatch: dispatch }}
		>
			<div className='App'>
				<div>Count: {count}</div>
				<br />
				<ComponentA />
				<ComponentB />
				<ComponentC />
			</div>
		</CounterContext.Provider>
	)
};

export default App;