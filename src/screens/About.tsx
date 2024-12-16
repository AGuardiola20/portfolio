import { Link } from "react-router";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.05rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  background-color: transparent;
  transition: all 0.3s ease;
  margin: 2rem 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    transform: scale(1.05);
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.bgLight};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
`;

const About = () => {
  return (
    <div>
      <NavBar />
      <Main>
        <Title>About Me</Title>
        <Description>
          Skilled team player with strong background in web and mobile
          environments. I have excellent soft skills, including effective
          communication, adaptability, and problem-solving. I work well
          independently to handle assignments and always ready to go beyond
          basic tasks. Quick learner with strong computer abilities.
        </Description>
        <StyledLink to={"/about/mypage"}>More About Me</StyledLink>
      </Main>
    </div>
  );
};

export default About;
