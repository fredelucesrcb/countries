import React from "react";

function Pagination({itemsPerPage, totalPages, paginate}) {
    const pageNumbers = [];

    for (let index = 1; index < Math.ceil(totalPages/itemsPerPage); index++) {
        pageNumbers.push(index)
    }

    return (
        <ul className={"pagination"}>
            {
                pageNumbers.map(number => (
                    <li className="page-item" key={number}>
                        <a href="!#" className="page-link" onClick={(e) => paginate(number)}>{number}</a>
                    </li>
                ))
            }
        </ul>

    )
}

export default Pagination