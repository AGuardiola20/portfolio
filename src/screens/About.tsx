import { Link } from "react-router";
import styled, { keyframes } from "styled-components";
import NavBar from "../components/NavBar";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.colors.background};
  animation: ${fadeIn} 1s ease-in-out;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  box-shadow: 0 4px 8px ${({ theme }) => theme.colors.shadow};

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  text-align: center;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  line-height: 1.8;
  margin: 1rem 0;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.2rem;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    transform: scale(1.05);
  }
`;

const About = () => {
  return (
    <>
      <NavBar />
      <MainContainer>
        <Container>
          <Title>About Me</Title>
          <Description>
            Skilled team player with strong background in web and mobile
            environments. I have excellent soft skills, including effective
            communication, adaptability, and problem-solving. I work well
            independently to handle assignments and always ready to go beyond
            basic tasks. Quick learner with strong computer abilities.
          </Description>
          <StyledLink to={"/about/mypage"}>More About Me</StyledLink>
        </Container>
      </MainContainer>
    </>
  );
};

export default About;
