import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const PageHeader = styled.header`
  background-color: #333; /* Цвет фона заголовка */
  padding: 16px 0; /* Внутренний отступ сверху и снизу */
  color: #fff; /* Цвет текста внутри заголовка */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Тень для заголовка */
`;

export const Nav= styled.nav`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center; /* Выравнивание элементов по центру горизонтально */
  gap: 100px; /* Расстояние между элементами навигации */
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #fff; /* Цвет ссылок */
  font-weight: bold;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #6b3a9e; /* Изменение цвета при наведении */
  }
`;