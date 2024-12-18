import styled, { keyframes } from "styled-components";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
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
    flex-direction: row;
    justify-content: space-between;
    gap: 3rem;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  margin: 1rem 0;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    text-align: left;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  padding: 0.8rem 1.2rem;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    transform: scale(1.05);
  }

  svg {
    font-size: 1rem;

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const Connect = () => {
  return (
    <>
      <NavBar />
      <MainContainer>
        <Container>
          <TextContainer>
            <Title>Let's Connect!</Title>
            <Description>
              Feel free to reach out to me on LinkedIn, GitHub, or send me an
              email directly. Let’s collaborate and build something amazing
              together!
            </Description>
            <ButtonContainer>
              <LinkButton
                href="https://www.linkedin.com/in/andr%C3%A9s-p%C3%A9rez-guardiola-b3a81b236/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
                LinkedIn
              </LinkButton>
              <LinkButton
                href="https://github.com/AGuardiola20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                GitHub
              </LinkButton>
              <LinkButton href="mailto:andres.pguardiola@gmail.com">
                <FaEnvelope />
                Email
              </LinkButton>
            </ButtonContainer>
          </TextContainer>
        </Container>
      </MainContainer>
    </>
  );
};

export default Connect;
