import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

// Component for pagination
const Pagination = ({ changePage, pageCount }) => {

    return(
        <>
            <div className="center">
                <ReactPaginate 
                    previousLabel={"Previous"} 
                    nextLabel={"Next"} 
                    pageCount={pageCount} 
                    onPageChange={changePage}
                    containerClassName={"paginationBtn"}
                    previousLinkClassName={"previousBtn"}
                    nextLinkClassName={"nextBtn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
        
        </>
    );

};

export default Pagination;