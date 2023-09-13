import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeroTitle = styled.h1`
  font-size: 60px;
  font-weight: 800;
  margin-bottom: 40px;
`;

export const HeroDescription = styled.p`
  max-width: 650px;
  margin-bottom: 40px;
`;

export const HeroLink = styled(Link)`
  display: block;
  text-align: center;
  max-width: 400px;
  font-size: 18px;
  padding: 14px 44px;
  border-radius: 12px;
  background-color:;
  transition: background-color ;

  &:hover,
  &:focus {
    background-color: ;
  }
`;