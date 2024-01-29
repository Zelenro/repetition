import styled from 'styled-components';

export const StyledTable = styled.table`
  //   width: 96%;
  border-collapse: collapse;
  margin: 16px;
`;

export const StyledTh = styled.th`
  background-color: lightblue;
  color: white;
  padding: 8px;
  text-align: left;
`;

export const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:nth-child(odd) {
    background-color: white;
  }
`;

export const StyledTd = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;
