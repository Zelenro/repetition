import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  width: 200px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Description = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const Tag = styled.p`
  color: #888;
  margin: 5px 0;
`;

export const Location = styled.p`
  color: #888;
  margin: 5px 0;
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
`;

export const StatItem = styled.li`
  text-align: center;
`;

export const Label = styled.span`
  font-size: 14px;
  color: #888;
  display: block;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #555;
  display: block;
`;
