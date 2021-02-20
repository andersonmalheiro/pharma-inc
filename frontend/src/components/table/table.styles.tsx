import styled from 'styled-components';
import { MdSync } from 'react-icons/md';

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

  tbody {
    display: block;
    max-height: 55vh;
    overflow: hidden;
    overflow-y: auto;
  }

  thead,
  tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  & td,
  & th {
    text-align: center;
    border: 1px solid #ddd;
    padding: 8px;
  }

  & tr:hover {
    background-color: #ddd;
  }

  & th {
    padding: 12px;
    text-align: center;
    background-color: #f97e3f;
    color: white;
  }
`;

export const CustomRow = styled.tr`
  text-align: center;
  padding: 10px;
  height: 100px;
`;

export const Paginator = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  width: fit-content;
  gap: 1em;
`;

export const PaginatorButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background: #fff;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }
`;

export const PaginatorIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  height: 60px;
  width: 60px;
  border: 4px solid #555;
  border-radius: 50%;
  background: #fff;
`;

export const LoadingIcon = styled(MdSync)`
  animation: spin 1s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
