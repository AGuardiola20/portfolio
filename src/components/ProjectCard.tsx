import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  div {
    flex: 1;
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem 0;
  &:last-of-type {
    border-top: none;
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
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
            <p>
              Year: <span>{year}</span>
            </p>
          </InfoContainer>
          <InfoContainer>
            <p>
              Role: <span>{role}</span>
            </p>
          </InfoContainer>
        </div>
        <div>
          {demoLink && <Link href={demoLink}>Live Demo</Link>}
          <Link href={githubLink}>See on Github</Link>
        </div>
      </TextContainer>
    </Container>
  );
};

export default ProjectCard;
