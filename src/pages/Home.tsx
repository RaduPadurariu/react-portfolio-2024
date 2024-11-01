import { Hero } from "../screen/Hero";
import { Projects } from "../screen/Projects";
import { Resume } from "../screen/Resume";
import { Skills } from "../screen/Skills";

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Resume />
      <Skills />
    </div>
  );
};

export default Home;
