import { Button, FlexColumn, FlexRow } from 'components/utils';
import React, { useState } from 'react';
import { randomString } from 'utils/random-id';
import {
  CustomRow,
  StyledTable,
  Paginator,
  PaginatorIndicator,
  PaginatorButton,
  LoadingIcon,
} from './table.styles';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export interface TableColumn {
  title: string;
  key: string;
}

export interface TableAction {
  text: string;
  onClick: (...args: any[]) => void;
}

interface TableProps<T = any> {
  columns: TableColumn[];
  data: T[];
  loading?: boolean;
  actions?: TableAction[];
  onPaginate?: (...args: any[]) => void;
  page?: number;
}

export const Table = (props: TableProps) => {
  const { columns, data, loading, actions, onPaginate, page } = props;

  return (
    <FlexColumn>
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
              <td colSpan={columns.length + 1} data-testid="loading_row">
                Loading...
              </td>
            </CustomRow>
          ) : !loading && data && data.length ? (
            data.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={randomString()}>{row[column.key]}</td>
                ))}
                {actions && (
                  <td>
                    <FlexRow aligment="center" justify="center">
                      {actions.map((action) => (
                        <Button
                          key={action.text}
                          onClick={() => action.onClick(row)}
                          round="rounded"
                          styling="primary"
                          data-testid={action.text}
                        >
                          {action.text}
                        </Button>
                      ))}
                    </FlexRow>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <CustomRow>
              <td colSpan={columns.length + 1}>No results...</td>
            </CustomRow>
          )}
        </tbody>
      </StyledTable>

      <FlexRow aligment="center" justify="center">
        <Paginator>
          <PaginatorButton
            data-testid="paginate_left"
            disabled={page <= 1}
            onClick={() => onPaginate(page - 1)}
          >
            <MdKeyboardArrowLeft size={40} />
          </PaginatorButton>
          <PaginatorIndicator>
            {loading ? <LoadingIcon data-testid="loading_icon" /> : page}
          </PaginatorIndicator>
          <PaginatorButton
            data-testid="paginate_right"
            onClick={() => onPaginate(page + 1)}
          >
            <MdKeyboardArrowRight size={40} />
          </PaginatorButton>
        </Paginator>
      </FlexRow>
    </FlexColumn>
  );
};
