import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import Pdf from "../Docs/AndresPerezGuardiola_CV_Eng.pdf";
import NavBar from "../components/NavBar";

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem 4rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fontFamily};
`;

const Section = styled.section`
  margin-bottom: 6rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 0.5rem auto 0;
    border-radius: 2px;
  }
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 700px;
  margin: 1rem 0;
  color: ${({ theme }) => theme.colors.textSecondary};

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ButtonContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 2rem;
`;

const CapabilitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 20px;
  cursor: default;

  span {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: 0.8rem 1.6rem;
    border-radius: 30px;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    transition: all 0.3s ease;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    border: 2px solid ${({ theme }) => theme.colors.secondary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondaryHover};
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    svg {
      font-size: 1.3rem;
    }
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  padding-left: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ExperienceItem = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 0.5rem;
    width: 14px;
    height: 14px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
  }

  h3 {
    font-size: 1.5rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.textPrimary};
    span {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.2rem;
      line-height: 3rem;
    }
  }

  span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-top: 0.5rem;
  }

  li {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-top: 0.5rem;
    line-height: 1.5;
  }
`;

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  padding-left: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const EducationItem = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 0.5rem;
    width: 14px;
    height: 14px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
  }

  h3 {
    font-size: 1.5rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-top: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-top: 0.5rem;
    line-height: 1.5;
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

const About = () => {
  return (
    <>
      <NavBar />
      <MainContainer>
        <Section>
          <Title>About Me</Title>
          <AboutMe>
            <AboutText>
              Highly skilled team player with a robust background in{" "}
              <strong>web and mobile development environments</strong>. I have
              excellent soft skills, including{" "}
              <strong>effective communication</strong>,
              <strong>adaptability</strong>, and{" "}
              <strong>problem-solving</strong>. I am highly self-motivated and
              able to work independently to manage tasks, always willing to go
              above and beyond basic expectations. A{" "}
              <strong>quick learner</strong> with strong{" "}
              <strong>technical expertise</strong>.
            </AboutText>
            <ButtonContainer>
              <LinkButton href={Pdf} target="_blank" rel="noopener noreferrer">
                <IoMdDownload />
                Download Resume
              </LinkButton>
            </ButtonContainer>
          </AboutMe>
        </Section>

        <Section>
          <Title>My Capabilities</Title>
          <CapabilitiesContainer>
            <span>
              <FaReact /> React
            </span>
            <span>
              <FaMobileAlt /> React Native
            </span>
            <span>
              <FaVuejs /> Vue.js
            </span>
            <span>
              <IoLogoFirebase /> Firebase
            </span>
            <span>
              <SiMongodb /> MongoDB
            </span>
            <span>
              <GrMysql /> MySQL
            </span>
            <span>
              <FaGithub /> Github
            </span>
            <span>
              <FaFigma /> Figma
            </span>
          </CapabilitiesContainer>
        </Section>

        <Section>
          <Title>My Experience</Title>
          <ExperienceContainer>
            <ExperienceItem>
              <h3>
                Software Developer <br /> <span>Weve Technology</span>
              </h3>
              <span>Mar 2024 - Sep 2024</span>
              <ul>
                <li>
                  Developed mobile apps using React Native and web applications
                  with Vue.
                </li>
                <li>
                  Integrated design feedback to build and maintain user-centered
                  software applications.
                </li>
                <li>
                  Contributed to code reviews, debugging, and optimization.
                </li>
                <li>
                  Collaborated with UI/UX personnel to integrate ease-of-use and
                  accessibility considerations into developed software.
                </li>
                <li>
                  Integrated advanced technologies and tools to improve software
                  performance.
                </li>
              </ul>
            </ExperienceItem>
            <ExperienceItem>
              <h3>
                Software Developer <br /> <span>Centauro Solutions</span>
              </h3>
              <span>Agu 2023 - Dec 2023</span>
              <ul>
                <li>
                  Implemented modern front-end frameworks to create interactive
                  user interfaces and enhance user experience.
                </li>
                <li>
                  Applied optimization techniques to enhance website speed and
                  user satisfaction.
                </li>
                <li>
                  Used coding skills to build prototype sites according to
                  designer vision.
                </li>
                <li>
                  Utilized MongoDB to store and retrieve data, implementing
                  secure authentication and authorization mechanisms.
                </li>
              </ul>
            </ExperienceItem>
          </ExperienceContainer>
        </Section>

        <Section>
          <Title>My Education</Title>
          <EducationContainer>
            <EducationItem>
              <h3>
                Bachelor of Computer Science and Multimedia Technology |{" "}
                <strong>Universidad de Costa Rica</strong>
              </h3>
              <span>2019 - 2023</span>
            </EducationItem>
            <EducationItem>
              <h3>
                Certification in Web App Deveolpment with React |{" "}
                <strong>Cenfotec University</strong>
              </h3>
              <span>2024</span>
            </EducationItem>
            <EducationItem>
              <h3>
                Bachelor of Software Development Engineering |{" "}
                <strong>Fidelitas University</strong>
              </h3>
              <span>2024 - 2025</span>
            </EducationItem>
          </EducationContainer>
        </Section>
      </MainContainer>
    </>
  );
};

export default About;
