import {
  Label,
  Percentage,
  StatItem,
  StatList,
  StatisticsWrapper,
  Title,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <StatisticsWrapper>
        <Title>{title}</Title>

        <StatList>
          <StatItem>
            <Label>{stats[0].label}</Label>
            <Percentage>{stats[0].percentage}%</Percentage>
          </StatItem>
          <StatItem>
            <Label>{stats[1].label}</Label>
            <Percentage>{stats[1].percentage}%</Percentage>
          </StatItem>
          <StatItem>
            <Label>{stats[2].label}</Label>
            <Percentage>{stats[2].percentage}%</Percentage>
          </StatItem>
          <StatItem>
            <Label>{stats[3].label}</Label>
            <Percentage>{stats[3].percentage}%</Percentage>
          </StatItem>
          <StatItem>
            <Label>{stats[4].label}</Label>
            <Percentage>{stats[4].percentage}%</Percentage>
          </StatItem>
        </StatList>
      </StatisticsWrapper>
    </>
  );
};
