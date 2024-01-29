import styled from 'styled-components';

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const StatisticsWrapper = styled.section`
  width: 500px;
  background-color: #f4f4f4;
  margin: 16px;
  border-radius: 8px;
  text-align: center;
`;

export const Title = styled.h2`
  padding-top: 16px;
  color: #333;
`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

export const StatItem = styled.li`
  width: 100%;
  height: 100px;
  flex-direction: column;
  background-color: ${({ even }) =>
    even ? getRandomColor() : getRandomColor()};

  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.span`
  font-weight: bold;
  padding: 8px;
  color: ${({ even }) => (even ? getRandomColor() : getRandomColor())};
`;

export const Percentage = styled.span`
  font-weight: bold;
  color: ${({ even }) => (even ? getRandomColor() : getRandomColor())};
`;
