import React from 'react';
import { randomString } from 'utils/random-id';
import { CustomRow, StyledTable } from './table.styles';

export interface TableColumn {
  title: string;
  key: string;
}

interface TableProps<T = any> {
  columns: TableColumn[];
  data: T[];
  loading: boolean;
}

export const Table = (props: TableProps) => {
  const { columns, data, loading } = props;
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.title}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <CustomRow>
            <td colSpan={columns.length + 1}>Loading...</td>
          </CustomRow>
        ) : !loading && data && data.length ? (
          data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={randomString()}>{row[column.key]}</td>
              ))}
              <td>
                <button>Details</button>
              </td>
            </tr>
          ))
        ) : (
          <CustomRow>
            <td colSpan={columns.length + 1}>No results...</td>
          </CustomRow>
        )}
      </tbody>
    </StyledTable>
  );
};
