import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  div {
    flex: 1;
  }
  @media (max-width: 1060px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Name = styled.h3`
  font-weight: 400;
  font-size: 2rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  padding: 3rem;
  border-radius: 10px;
`;

const ProjectInfo = styled.p`
  text-transform: uppercase;
  margin: 1rem 0;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem 0;
  &:last-of-type {
    border-top: none;
  }
`;
const InfoItem = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Link = styled.a`
  display: flex;
  width: max-content;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  padding-bottom: 0.4rem;
  position: relative;
  transition: transform 0.3s ease, color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:hover::after {
    width: 100%;
  }
`;

type ProjectCardProps = {
  image: string;
  name: string;
  description: string;
  year: number;
  role: "Frontend Developer" | "Backend Developer" | "Fullstack Developer";
  githubLink: string;
  demoLink?: string;
};

const ProjectCard = ({
  image,
  name,
  description,
  year,
  role,
  githubLink,
  demoLink,
}: ProjectCardProps) => {
  return (
    <Container>
      <ImageContainer>
        <img
          src={image}
          alt={`${name} Image`}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </ImageContainer>
      <TextContainer>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <div>
          <ProjectInfo>Project Info</ProjectInfo>
          <InfoContainer>
            <p>Year:</p>
            <InfoItem>{year}</InfoItem>
          </InfoContainer>
          <InfoContainer>
            <p>Role:</p>
            <InfoItem>{role}</InfoItem>
          </InfoContainer>
        </div>
        <div>
          {demoLink && (
            <Link href={demoLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </Link>
          )}
          <Link href={githubLink} target="_blank" rel="noopener noreferrer">
            See on Github <FaGithub />
          </Link>
        </div>
      </TextContainer>
    </Container>
  );
};

export default ProjectCard;
