import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function PaginationComponent({itemsPerPage, totalPages, paginate, currentPage}) {
    const pageNumbers = [];

    for (let index =0; index < Math.ceil(totalPages/itemsPerPage); index++) {
        pageNumbers.push(index)
    }

    return (
        <Stack spacing={0}>
            <Pagination count={pageNumbers.length} page={currentPage} onChange={(e, pageNumber) => paginate(e, pageNumber)}>
            </Pagination>
        </Stack>

    )
}

export default PaginationComponent