import React, { createContext } from 'react';
import './App.css';

// import Home from './component/home';
import ComponentA from './component/componentA';

const UserContext = createContext();
const ChannelContext = createContext();

function App() {
	return (
		<div className="App">
			<UserContext.Provider value={'Santosh'}>
				<ChannelContext.Provider value={'ONPASSIVE'}>
					<ComponentA />
				</ChannelContext.Provider>
			</UserContext.Provider>
		</div>
	);
}

export default App;

export {
	UserContext,
	ChannelContext
};