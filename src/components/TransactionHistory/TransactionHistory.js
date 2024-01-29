import {
  StyledTable,
  StyledTd,
  StyledTh,
  StyledTr,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <StyledTable>
        <thead>
          <StyledTr>
            <StyledTh>Type</StyledTh>
            <StyledTh>Amount</StyledTh>
            <StyledTh>Currency</StyledTh>
          </StyledTr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <StyledTr key={id}>
              <StyledTd>{type}</StyledTd>
              <StyledTd>{amount}</StyledTd>
              <StyledTd>{currency}</StyledTd>
            </StyledTr>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
};
