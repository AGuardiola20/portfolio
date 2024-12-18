import NavBar from "../components/NavBar";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin-top: 60px;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-size: 6rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 50%;
  height: 50%;
  object-fit: contain;
`;

const Home = () => {
  return (
    <>
      <NavBar />
      <Main>
        <TextContainer>
          <Title>Hi, I am Andres Perez.</Title>
          <Text>
            A Costa Rica based full-stack developer passionate about building
            accessible and user friendly websites.
          </Text>
        </TextContainer>
        <ImageContainer>
          <Image src="https://via.placeholder.com/800" alt="Profile-pic" />
        </ImageContainer>
      </Main>
    </>
  );
};

export default Home;
