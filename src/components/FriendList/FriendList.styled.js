import styled from 'styled-components';

export const FriendListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 1440px) {
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 320px) {
  }
`;

export const FriendListItem = styled.li`
  text-align: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 10px;
  width: 200px;
`;

export const StyledSpan = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => (props.children === false ? 'green' : 'blue')};
  margin-right: 5px;

  img {
    max-width: 100%;
    height: auto;
  }

  p {
    margin-top: 5px;
    font-weight: bold;
  }
`;
