import { NavigationLink, Nav, PageHeader } from './Header.styled';

const Header = () => {
  return (
    <PageHeader>
           <nav>
        <Nav>
          
            <NavigationLink to="/">Home</NavigationLink>
          
          
            <NavigationLink to="/catalog">Catalog</NavigationLink>
         
         
            <NavigationLink to="/favorites">Favorites</NavigationLink>
          
        </Nav>
      </nav>
    </PageHeader>
  );
};

export default Header;