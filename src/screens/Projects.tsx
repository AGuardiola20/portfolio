import ProjectCard from "../components/ProjectCard";
import NewsHomePageImg from "../assets/imgs/newsHomePageImg.png";
import FitnessImg from "../assets/imgs/fitnessImg.png";
import SafeGateImg from "../assets/imgs/safeGateImg.png";
import SecretSantaImg from "../assets/imgs/secretSantaImg.png";
import SplitterImg from "../assets/imgs/splitterImg.png";
import TodoImg from "../assets/imgs/todoImg.png";
import MovieImg from "../assets/imgs/moviesImg.png";
import VetImg from "../assets/imgs/vetImg.png";
import BudgetImg from "../assets/imgs/budgetImg.png";
import styled, { keyframes } from "styled-components";
import NavBar from "../components/NavBar";

type Project = {
  image: string;
  name: string;
  description: string;
  year: number;
  role: "Frontend Developer" | "Backend Developer" | "Fullstack Developer";
  githubLink: string;
  demoLink?: string;
};

const PROJECTS: Project[] = [
  {
    name: "SafeGate",
    description:
      "SafeGate is an application developed in React with Vite to facilitate the process of entering visitors to condominiums. Owners can fill in their guests' data through a form, and managers can view and manage this information in the application's interface.",
    image: SafeGateImg,
    year: 2024,
    role: "Fullstack Developer",
    githubLink: "https://github.com/AGuardiola20/safegate-project-react",
    demoLink: "https://safegate.netlify.app/",
  },
  {
    name: "Fitness App",
    description:
      "This fitness app is a simple demonstration of React Native, featuring animations with React Native Reanimated and navigation with Expo Router. It was primarily developed for educational purposes to familiarize oneself with these technologies.",
    image: FitnessImg,
    year: 2024,
    role: "Frontend Developer",
    githubLink: "https://github.com/AGuardiola20/fitness-react-native",
  },
  {
    name: "Secret Santa",
    description:
      "Secret Santa is an application developed with React and Firebase to manage gift exchanges in a fun and organized way. The app allows users to sign up, join or create groups, randomly assign participants, and send notifications about their assignments. It is designed to enhance the celebration experience while maintaining participant anonymity.",
    image: SecretSantaImg,
    year: 2024,
    role: "Fullstack Developer",
    githubLink: "https://github.com/AGuardiola20/secret-santa",
  },
  {
    name: "News homepage",
    description:
      "Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development.",
    image: NewsHomePageImg,
    year: 2024,
    role: "Frontend Developer",
    githubLink: "https://github.com/AGuardiola20/news-homepage",
  },
  {
    name: "Splitter App",
    description:
      "Splitter is an application designed to quickly and easily calculate the total of a shared purchase among multiple people. Developed using React Native, this app offers an intuitive and user-friendly interface for splitting bills among friends, family, or dining companions. This project was a challenge from Frontend Mentor.",
    image: SplitterImg,
    year: 2024,
    role: "Frontend Developer",
    githubLink: "https://github.com/AGuardiola20/splitter-react-native",
  },
  {
    name: "ToDo App",
    description:
      "This Todo application is a simple tool designed to help you manage your tasks efficiently and organized. Developed using React Native, this application offers an intuitive and user-friendly interface for managing your to-do lists. This project was part of a challenge from Frontend Mentor.",
    image: TodoImg,
    year: 2024,
    role: "Frontend Developer",
    githubLink: "https://github.com/AGuardiola20/splitter-react-native",
  },
  {
    name: "Movie App",
    description:
      "This movie app is a platform that utilizes The Movie DB API to offer users access to a wide selection of movies and actors. Developed with React Native, Expo, NativeWind, and React Navigation, the app provides a user-friendly and easy-to-use interface for movie enthusiasts.",
    image: MovieImg,
    year: 2024,
    role: "Fullstack Developer",
    githubLink: "https://github.com/AGuardiola20/movies-app-react-native",
  },
  {
    name: "Vet Patient Management App",
    description:
      "This is a simple patient management application for veterinarians, built using React, Vite, and Tailwind CSS. It allows veterinarians to record and manage patient information, including basic details and medical history. All data is stored locally in the browser's local storage.",
    image: VetImg,
    year: 2023,
    role: "Fullstack Developer",
    githubLink: "https://github.com/AGuardiola20/citas_react",
    demoLink: "https://aguardiola-citas-react-tst.netlify.app/",
  },
  {
    name: "Budget App",
    description:
      "This is a web application project developed with React, Vite, and Stylesheet. The application allows the user to enter a total budget and distribute it among different categories. As the user assigns money to each category, a visual chart is updated to provide an intuitive representation of how the budget is distributed.",
    image: BudgetImg,
    year: 2023,
    role: "Frontend Developer",
    githubLink: "https://github.com/AGuardiola20/presupuesto-react",
    demoLink: "https://aguardiola-presupuesto-react.netlify.app/",
  },
];

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

const Container = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
`;

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
    <>
      <NavBar />
      <Container>
        <Title>Featured Projects</Title>
        <Text>
          Here are some of the selected projects that showcase my passion for
          development.
        </Text>
        <ProjectsContainer>
          {PROJECTS.map((project, index) => {
            return (
              <div key={index}>
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  image={project.image}
                  role={project.role}
                  year={project.year}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                />
              </div>
            );
          })}
        </ProjectsContainer>
      </Container>
    </>
  );
};

export default Projects;
