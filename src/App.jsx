import { Fragment, useState } from 'react';
import RCPagination from './RCPagination';
import ReactJSPagination from './ReactJSPagination';
import ReactPaginate from './ReactPaginate';
const App = () => {
   const [activePage, setActivePage] = useState(2);
   const totalCount = 20;
   return (
      <Fragment>
         <h1 style={{ textAlign: 'center' }}>Pagination component</h1>
         <h4 style={{ textAlign: 'center' }}>
            <a href='https://github.com/hayitmurod707/pagination'>Github</a>
         </h4>
         <h2 style={{ textAlign: 'center' }}>rc-pagination</h2>
         <br />
         <RCPagination
            current={activePage}
            onChange={setActivePage}
            total={totalCount}
         />
         <br />
         <h2 style={{ textAlign: 'center' }}>react-js-pagination</h2>
         <br />
         <ReactJSPagination
            activePage={activePage}
            onChange={setActivePage}
            totalItemsCount={totalCount}
            pageRangeDisplayed={3}
         />
         <br />
         <h2 style={{ textAlign: 'center' }}>react-paginate</h2>
         <br />
         <ReactPaginate
            forcePage={activePage - 1}
            onPageChange={({ selected }) => setActivePage(selected + 1)}
            pageCount={totalCount}
         />
      </Fragment>
   );
};
export default App;
