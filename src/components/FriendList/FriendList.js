import {
  FriendListContainer,
  FriendListItem,
  StyledSpan,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <>
      <FriendListContainer>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem key={id}>
            <StyledSpan>{isOnline}</StyledSpan>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
          </FriendListItem>
        ))}
      </FriendListContainer>
    </>
  );
};
