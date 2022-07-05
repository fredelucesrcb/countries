import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function PaginationComponent({itemsPerPage, totalPages, paginate, currentPage}) {
    const pageNumbers = [];

    for (let index = 1; index < Math.ceil(totalPages/itemsPerPage); index++) {
        pageNumbers.push(index)
    }

    return (
        // <ul className={"pagination"}>
        //     {
        //         pageNumbers.map(number => (
        //             <li className="page-item" key={number}>
        //                 <a href="!#" className="page-link" onClick={(e) => paginate(number)}>{number}</a>
        //             </li>
        //         ))
        //     }
        // </ul>

        <Stack spacing={0}>
            {/* {
                pageNumbers.map(number => ( */}
                    <Pagination count={pageNumbers.length}page={currentPage} onChange={(e, pageNumber) => paginate(e, pageNumber)}>
                        {/* <a href="!#" className="page-link" ></a> */}
                    </Pagination>
                {/* ))
            } */}
        </Stack>

    )
}

export default PaginationComponent