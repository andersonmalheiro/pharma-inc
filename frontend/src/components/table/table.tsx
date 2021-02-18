import React from 'react';
import { StyledTable } from './table.styles';

interface TableColumn {
  title: string;
  key: string;
}

interface TableProps<T = any> {
  columns: TableColumn[];
  data: T[];
}

export const Table = (props: TableProps) => {
  const { columns, data } = props;
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
        {data.map((row) => (
          <tr>
            {columns.map((column) => (
              <td>{row[column.key]}</td>
            ))}
            <td>
              <button>Details</button>
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
