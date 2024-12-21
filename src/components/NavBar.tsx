import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router";

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
  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerIcon = styled(GiHamburgerMenu)`
  font-size: 2rem;
  cursor: pointer;
  display: none;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    display: block;
  }
`;

const Sidebar = styled.div<{ isOpen: boolean }>`
  z-index: 10000;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  height: 100%;
  width: 260px;
  background-color: rgba(26, 26, 26, 0.6);
  backdrop-filter: blur(10px);
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 1rem 2rem;
  border-radius: 20px 0;

  a {
    margin: 1rem 0;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 1.2rem;
    transition: 0.2s ease-in;
    &:hover {
      transform: scale(1.1);
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Container>
      <Logo to={"/"}>Andres Perez</Logo>
      <NavContainer>
        <StyledLink to={"/projects"}>Projects</StyledLink>
        <StyledLink to={"/about"}>About Me</StyledLink>
        <StyledLink to={"/contact"}>Contact</StyledLink>
      </NavContainer>
      <HamburgerIcon onClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen}>
        <StyledLink to={"/projects"} onClick={toggleSidebar}>
          Projects
        </StyledLink>
        <StyledLink to={"/about"} onClick={toggleSidebar}>
          About Me
        </StyledLink>
        <StyledLink to={"/contact"} onClick={toggleSidebar}>
          Contact
        </StyledLink>
      </Sidebar>
    </Container>
  );
};

export default NavBar;
