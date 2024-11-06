import { CiCalendar } from "react-icons/ci";
import { blogs } from "../assets/data/data";
import { AiFillFolder } from "react-icons/ai";
import { RefObject } from "react";

interface ProjectsProps {
  projectsRef: RefObject<HTMLDivElement>;
}
export const Projects: React.FC<ProjectsProps> = ({ projectsRef }) => {
  return (
    <>
      <section className="blog-section" ref={projectsRef}>
        <div className="container">
          <div className="section-header text">
            <h2 className="section-title">My Recent Work</h2>
            <p>
              These projects are my early steps in React development, each one
              featuring unique templates and personal touches as I build my
              skills.
            </p>
          </div>
          <div className="grid4">
            {blogs.map((blog) => (
              <div className="blog-item" key={blog.id}>
                <div className="blog-thumb">
                  <img src={blog.image} alt="" />
                  <div className="category">{blog.category.join(" - ")}</div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <ul className="ul-reset">
                      <li>
                        <i>
                          <CiCalendar size={20} />
                        </i>
                        {blog.date}
                      </li>
                      <li>
                        <i>
                          <AiFillFolder size={20} />
                        </i>
                        {blog.projectType} ({blog.projects})
                      </li>
                    </ul>
                  </div>
                  <h3 className="blog-title">
                    <a href={blog.link} target="_blank">
                      {blog.title}
                    </a>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
