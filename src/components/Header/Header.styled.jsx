import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const PageHeader = styled.header`
 position: fixed;
  z-index: 7;
  background-color: #333cc; /* Цвет фона заголовка */
  padding: 16px 0; /* Внутренний отступ сверху и снизу */
  color: #fff; /* Цвет текста внутри заголовка */
   box-shadow: 0px 2px 7px 0px rgba(18, 20, 23, 0.2); /* Тень для заголовка */
`;

export const Nav= styled.nav`
  list-style: none;
  padding: 20;
  margin: 0;
  display: flex;
  justify-content: center; /* Выравнивание элементов по центру горизонтально */
  gap: 100px;
   width: 1185px;/* Расстояние между элементами навигации */
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #333; /* Цвет ссылок */
  font-weight: bold;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #6b3a9e; /* Изменение цвета при наведении */
  }
`;