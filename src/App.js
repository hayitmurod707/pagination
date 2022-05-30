import React, { useState } from 'react';
import Pagination from './Pagination';
const App = () => {
	const [activePage, setActivePage] = useState(1);
	return (
		<div>
			<Pagination
				activePage={activePage}
				setActivePage={setActivePage}
				totalItems={20}
			/>
		</div>
	);
};
export default App;
