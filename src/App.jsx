import { useState } from 'react';
import { Circle, Default, Full, Rectangle } from './Pagination';
const App = () => {
	const [activePage, setActivePage] = useState(1);
	return (
		<>
			<Rectangle
				activePage={activePage}
				setActivePage={setActivePage}
				totalItemsCount={20}
			/>
			<br />
			<br />
			<br />
			<Circle
				activePage={activePage}
				setActivePage={setActivePage}
				totalItemsCount={20}
			/>
			<br />
			<br />
			<br />
			<Default
				activePage={activePage}
				setActivePage={setActivePage}
				totalItemsCount={20}
			/>
			<br />
			<br />
			<br />
			<Full
				activePage={activePage}
				setActivePage={setActivePage}
				totalItemsCount={20}
			/>
		</>
	);
};
export default App;
