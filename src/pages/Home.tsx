import { Contact } from "../screen/Contact";
import { Hero } from "../screen/Hero";
import { Projects } from "../screen/Projects";
import { Resume } from "../screen/Resume";
import { Skills } from "../screen/Skills";

const Home = () => {
  return (
    <div>
      <Hero />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
