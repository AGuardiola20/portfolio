import ProjectCard from "../components/ProjectCard";
import Project1 from "../assets/imgs/project1.png";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 2rem 0;
`;
const Title = styled.h2`
  font-size: 3.5rem;
  text-align: center;
`;
const Text = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Projects = () => {
  return (
    <div>
      <NavBar />
      <Title>Featured Projects</Title>
      <Text>
        Here are some of the selected projects that showcase my passion for
        development.
      </Text>
      <ProjectsContainer>
        <ProjectCard
          name="Blog site for World News"
          description="Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development."
          image={Project1}
          year={2024}
          role="Frontend Developer"
          githubLink="https://github.com/AGuardiola20/news-homepage"
        />
        <ProjectCard
          name="Blog site for World News"
          description="Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development."
          image={Project1}
          year={2024}
          role="Frontend Developer"
          githubLink="https://github.com/AGuardiola20/news-homepage"
        />
        <ProjectCard
          name="Blog site for World News"
          description="Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development."
          image={Project1}
          year={2024}
          role="Frontend Developer"
          githubLink="https://github.com/AGuardiola20/news-homepage"
        />
      </ProjectsContainer>
    </div>
  );
};

export default Projects;
