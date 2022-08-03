import { useState } from 'react';
import RCPagination from './RCPagination';
import ReactJSPagination from './ReactJSPagination';
import ReactPaginate from './ReactPaginate';
// text color #6e7892
// current color #0000ff
// active text color #ffffff
const App = () => {
	const [activePage, setActivePage] = useState(2);
	const totalCount = 20;
	return (
		<>
			<h1 style={{ textAlign: 'center' }}>Pagination component</h1>
			<h2 style={{ textAlign: 'center' }}>react-js-pagination</h2>
			<br />
			<ReactJSPagination
				activePage={activePage}
				onChange={setActivePage}
				totalItemsCount={totalCount}
			/>
			<br />
			<h2 style={{ textAlign: 'center' }}>rc-pagination</h2>
			<br />
			<RCPagination
				current={activePage}
				onChange={setActivePage}
				total={totalCount}
			/>
			<br />
			<h2 style={{ textAlign: 'center' }}>react-paginate</h2>
			<br />
			<ReactPaginate
				forcePage={activePage - 1}
				onPageChange={({ selected }) => setActivePage(selected + 1)}
				pageCount={totalCount}
			/>
		</>
	);
};
export default App;
