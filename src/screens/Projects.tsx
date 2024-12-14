import ProjectCard from "../components/ProjectCard";
import Project1 from "../assets/imgs/project1.png";

const Projects = () => {
  return (
    <div>
      <h2>Featured Projects</h2>
      <p>
        Here are some of the selected projects that showcase my passion for
        development.
      </p>
      <ProjectCard
        name="Blog site for World News"
        description="Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development."
        image={Project1}
        year={2024}
        role="Frontend Developer"
        githubLink="https://github.com/AGuardiola20/news-homepage"
      />
    </div>
  );
};

export default Projects;
