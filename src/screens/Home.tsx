import NavBar from "../components/NavBar";
import styled, { keyframes } from "styled-components";

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

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 2rem;
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  animation: ${fadeIn} 1s ease-in-out;

  h1 {
    margin-bottom: 1rem;
    font-size: 3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textPrimary};
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.5rem;
    line-height: 1.8;
    color: #f0f0f0;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled.a`
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
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 1.2s ease-in-out;

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
  }
`;

const Home = () => {
  return (
    <>
      <NavBar />
      <Main>
        <TextContainer>
          <h1>Hi, I’m Andres Perez</h1>
          <p>
            I’m a full-stack developer based in Costa Rica, passionate about
            creating accessible, user-friendly digital experiences.
          </p>
          <CTAButton href="#portfolio">View Portfolio</CTAButton>
        </TextContainer>
        <ImageContainer>
          <img
            src="https://via.placeholder.com/400"
            alt="Andres Perez Portrait"
          />
        </ImageContainer>
      </Main>
    </>
  );
};

export default Home;
