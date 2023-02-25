import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTable, useSortBy } from 'react-table';
import Title from '../components/Title';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

const StyledRow = styled.tr`
  border-bottom: 1px solid #ebedf3;
`;

const StyledTh = styled.th`
  color: #b5b5c3;
  text-transform: uppercase;
  text-align: left;
  font-weight: 700;
  padding: 15px 0;
`;

const StyledTd = styled.td`
  padding: 15px 0;
`;

function EmployeeList({ employees }) {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Last Name',
        accessor: 'lastName', // accessor is the "key" in the data
      },
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Start date',
        accessor: (data) => data.dateStart.toLocaleString(),
      },
      {
        Header: 'Department',
        accessor: 'department',
      },
      {
        Header: 'Date of birth',
        accessor: (data) => data.dateBirth.toLocaleString(),
      },
      {
        Header: 'Street',
        accessor: 'street',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'State',
        accessor: 'state',
      },
      {
        Header: 'Zip code',
        accessor: 'zipCode',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: employees }, useSortBy);

  return (
    <main className="main">
      <Title value="Current Employees" />

      <div id="employee-div" className="container">
        <StyledTable
          id="employee-table"
          className="display"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <StyledRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <StyledTh
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted && (
                        <span>{column.isSortedDesc ? ' 🔽' : ' 🔼'}</span>
                      )}
                    </span>
                  </StyledTh>
                ))}
              </StyledRow>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <StyledRow {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <StyledTd {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </StyledTd>
                  ))}
                </StyledRow>
              );
            })}
          </tbody>
        </StyledTable>
        <Link to="/">Home</Link>
      </div>
    </main>
  );
}

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default EmployeeList;
