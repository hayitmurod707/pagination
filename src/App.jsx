import React, { useState } from 'react';
import CirclePagination from './CirclePagination';
import FullPagination from './FullPagination';
import Pagination from './Pagination';
import RectanglePagination from './RectanglePagination';
const App = () => {
	const [activePage, setActivePage] = useState(1);
	return (
		<>
			<RectanglePagination
				activePage={activePage}
				setActivePage={setActivePage}
				totalItemsCount={20}
			/>
			<br />
			<br />
			<br />
			<CirclePagination
				activePage={activePage}
				setActivePage={setActivePage}
				totalItemsCount={20}
			/>
			<br />
			<br />
			<br />
			<Pagination
				activePage={activePage}
				setActivePage={setActivePage}
				totalItemsCount={20}
			/>
			<br />
			<br />
			<br />
			<FullPagination
				activePage={activePage}
				setActivePage={setActivePage}
				totalItemsCount={20}
			/>
		</>
	);
};
export default App;
