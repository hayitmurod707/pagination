import { useState } from 'react';
import ReactJSPagination from './ReactJSPagination';
const App = () => {
	const [activePage, setActivePage] = useState(2);
	return (
		<>
			<h1>Pagination component with react-js-pagination</h1>
			<br />
			<br />
			<br />
			<ReactJSPagination
				activePage={activePage}
				onChange={setActivePage}
				totalItemsCount={20}
			/>
			<br />
			<br />
			<br />
			<ReactJSPagination
				activePage={activePage}
				hideFirstLastPages={false}
				onChange={setActivePage}
				totalItemsCount={20}
			/>
			<br />
			<br />
			<br />
			<ReactJSPagination
				activePage={activePage}
				onChange={setActivePage}
				rounded={true}
				totalItemsCount={20}
			/>
			<br />
			<br />
			<br />
			<ReactJSPagination
				activePage={activePage}
				hideFirstLastPages={false}
				onChange={setActivePage}
				rounded={true}
				totalItemsCount={20}
			/>
		</>
	);
};
export default App;
