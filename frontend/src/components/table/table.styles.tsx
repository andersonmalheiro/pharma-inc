import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

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

export const StyledTableCell = styled.th`
  text-align: center;
  padding: 10px;
  border: 1px solid;
`;

export const StyledTD = styled.td`
  text-align: center;
  padding: 10px;
  border: 1px solid;
`;
