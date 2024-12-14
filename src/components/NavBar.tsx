import { Link } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.4rem;
`;

const NavContainer = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavBar = () => {
  return (
    <Container>
      <Logo to={"/"}>Andres Perez</Logo>
      <NavContainer>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/about"}>About Me</Link>
        <Link to={"/contact"}>Contact</Link>
      </NavContainer>
    </Container>
  );
};

export default NavBar;
