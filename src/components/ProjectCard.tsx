import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: auto;
  padding: 1rem;

  div {
    flex: 1;
  }

  @media (max-width: 1060px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const Name = styled.h3`
  font-weight: 400;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  padding: 3rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    max-height: 300px;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProjectInfo = styled.p`
  text-transform: uppercase;
  margin: 1rem 0;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.5rem 0;

  &:last-of-type {
    border-top: none;
  }
`;

const InfoItem = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: clamp(0.8rem, 1.5vw, 1rem);
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  position: relative;
  transition: transform 0.3s ease, color 0.3s ease;

  font-size: clamp(0.8rem, 1.5vw, 1rem);

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
        <img src={image} alt={`${name} Image`} />
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
        <LinksContainer>
          {demoLink && (
            <Link href={demoLink} target="_blank" rel="noopener noreferrer">
              Live Demo <FaExternalLinkAlt />
            </Link>
          )}
          <Link href={githubLink} target="_blank" rel="noopener noreferrer">
            See on Github <FaGithub />
          </Link>
        </LinksContainer>
      </TextContainer>
    </Container>
  );
};

export default ProjectCard;
