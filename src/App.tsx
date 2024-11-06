import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { useRef } from "react";

function App() {
  // Scroll reference
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // Functions to refs
  const scrollToResume = () =>
    resumeRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToSkills = () =>
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToProjects = () =>
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    contactRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Header
        scrollToResume={scrollToResume}
        scrollToSkills={scrollToSkills}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />
      <Outlet
        context={{
          resumeRef,
          skillsRef,
          projectsRef,
          contactRef,
        }}
      />
      <Footer
        scrollToResume={scrollToResume}
        scrollToSkills={scrollToSkills}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />
    </>
  );
}

export default App;
