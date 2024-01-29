import {
  Avatar,
  Description,
  Label,
  Location,
  Name,
  ProfileContainer,
  Quantity,
  StatItem,
  StatsList,
  Tag,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const statsKeys = Object.keys(stats);
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <StatItem>
          <Label>{statsKeys[0]}</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatItem>
        <StatItem>
          <Label>{statsKeys[1]}</Label>
          <Quantity>{stats.views}</Quantity>
        </StatItem>
        <StatItem>
          <Label>{statsKeys[2]}</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatItem>
      </StatsList>
    </ProfileContainer>
  );
};
