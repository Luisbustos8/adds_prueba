import React, { useState } from "react";
import { useFilters, useTable, useSortBy, usePagination } from "react-table";
import { Link } from "react-router-dom";



const InstaTable = ({columns, data, loading}) => {

    const [filterInput, setFilterInput ] = useState('');

    const handleFilter = e => {
        const value = e.target.value;
        setFilter('usernameIG', value)
        setFilterInput(value)
    };

   
    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow, 
        setFilter,
      
    } = useTable({
        columns,
        data
    },
    useFilters,
    useSortBy,
    );


    return (
        <div>
        <div class="input-group flex-nowrap mt-3 mb-3">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input 
                class="form-control"
                value={filterInput}
                onChange={handleFilter}
                placeholder={'Search by username'}
            />
        </div>
        <table class="table table table-striped table-hover"{...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr scope="col" {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                className={
                                    column.isSorted
                                    ? column.isSortedDesc
                                        ? "sort-desc 🔽"
                                        : "sort-asc 🔼"
                                    : " "
                                }
                            >
                                {column.render("Header")}
                            </th>

                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return  <td {...cell.getCellProps()}><Link style={{textDecoration: 'none', color: 'black'}} to={`/home/instagram:${cell.row.original.id}`}>{cell.render(cell.render('Cell'))}</Link></td>     
                            })}
                        </tr> 
                    );
                })}
                
            </tbody>
        </table>
        </div>)
};

export default InstaTable;