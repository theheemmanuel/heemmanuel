import { AnimateOnScroll } from "animate-on-scroll-framer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Allprojects from "./AllProject";

const Projects = () => {
  useEffect(() => {
    document.title = "My Projects";
  }, []);
  return (
    <div className="max-wid  font-inter py-12 text-zinc-600 dark:text-zinc-400">
      <AnimateOnScroll
        duration={2}
        delay={0}
        animation="flipIn"
        className="lg:px-20"
      >
        <div>
          <h3 className="font-bold text-black dark:text-white font-viga sm:text-4xl text-2xl">
            Projects
          </h3>
          <p className="my-4 max-w-2xl">
            I have gained experience working on several projects and below are
            few of the projects I have worked on.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-12 gap-y-8">
          {Allprojects.map((pro) => (
            <Link to={`/projects/${pro.title}`} key={pro.id}>
              <div className="dark:bg-black bg-zinc-50 p-6 rounded-2xl shadow-md flex gap-2">
                <div className="w-16">
                  <img className="h-full" src={pro.image} alt="" />
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white text-xl font-viga">
                    {pro.title}
                  </h3>
                  <p>{pro.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Projects;
