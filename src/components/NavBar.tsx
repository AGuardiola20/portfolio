import { Link } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0 2rem 0;
`;

const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.8rem;
  transition: 0.2s ease-in;
  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  transition: 0.2s ease-in;
  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavContainer = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavBar = () => {
  return (
    <Container>
      <Logo to={"/"}>Andres Perez</Logo>
      <NavContainer>
        <StyledLink to={"/projects"}>Projects</StyledLink>
        <StyledLink to={"/about"}>About Me</StyledLink>
        <StyledLink to={"/contact"}>Contact</StyledLink>
      </NavContainer>
    </Container>
  );
};

export default NavBar;
