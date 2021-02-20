import styled from 'styled-components';

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
