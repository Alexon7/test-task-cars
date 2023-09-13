import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


  
export const HeroTitle = styled.h1`
 color: #333;
  font-weight: bold;
  font-size: 40px;
  line-height: 2.4;
  text-shadow: 1px 1px 2px #5c5757;
  text-align: center;
`;

export const HeroDescription = styled.p`
   font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 50px;
   max-width: 600px;
   text-align: center;
  color: #555;
`;

export const HeroLink = styled(Link)`
  display: block;
  text-align: center;
  max-width: 400px;
  font-size: 20px;
  padding: 14px 44px;
  border-radius: 12px;
  background-color: #6b3a9e;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #4a2672; ;
  }
`;