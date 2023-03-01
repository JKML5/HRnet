import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';
import Title from '../components/Title';

const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StyledInputSearch = styled.input`
  font-size: 14px;
  padding: 0 20px;
  height: 50px;
`;

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

function EmployeeList() {
  const employees = useSelector((state) => state.employees);
  console.log(employees);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Last Name',
        accessor: 'lastName', // accessor is the "key" in the data
        filterAll: true,
      },
      {
        Header: 'First Name',
        accessor: 'firstName',
        filterAll: true,
      },
      {
        Header: 'Start date',
        accessor: (data) => data.dateStart.toLocaleString(),
        filterAll: true,
      },
      {
        Header: 'Department',
        accessor: 'department',
        filterAll: true,
      },
      {
        Header: 'Date of birth',
        accessor: (data) => data.dateBirth.toLocaleString(),
        filterAll: true,
      },
      {
        Header: 'Street',
        accessor: 'street',
        filterAll: true,
      },
      {
        Header: 'City',
        accessor: 'city',
        filterAll: true,
      },
      {
        Header: 'State',
        accessor: 'state',
        filterAll: true,
      },
      {
        Header: 'Zip code',
        accessor: 'zipCode',
        filterAll: true,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data: employees }, useGlobalFilter, useSortBy);

  const { globalFilter } = state;

  return (
    <main className="main">
      <StyledHeading>
        <Title value="Current Employees" />
        <StyledInputSearch
          type="text"
          placeholder="Search..."
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </StyledHeading>

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
      </div>
    </main>
  );
}

export default EmployeeList;
