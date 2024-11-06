import { RefObject } from "react";
import { Contact } from "../screen/Contact";
import { Hero } from "../screen/Hero";
import { Projects } from "../screen/Projects";
import { Resume } from "../screen/Resume";
import { Skills } from "../screen/Skills";
import { useOutletContext } from "react-router-dom";

interface SectionRefs {
  resumeRef: RefObject<HTMLDivElement>;
  skillsRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

const Home = () => {
  const { resumeRef, skillsRef, projectsRef, contactRef } =
    useOutletContext<SectionRefs>();

  return (
    <div>
      <Hero />
      <Resume resumeRef={resumeRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
};

export default Home;
