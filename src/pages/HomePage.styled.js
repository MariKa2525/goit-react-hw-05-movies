import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerMovie = styled.div`
  max-width: 1800px;
  margin: 0;
  padding: 15px;
  margin: 0 auto;
`;

export const StyledLink = styled(Link)`
  color: blue;
  font-size: 25px;

  &.active {
    color: red;
  }
`;

export const Title = styled.h1`
  color: black;
  font-size: 40px;
  margin-left: 40px;
`;

export const Ul = styled.ul`
  color: black;
  margin: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
