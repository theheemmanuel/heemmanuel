import { AnimateOnScroll } from "animate-on-scroll-framer";
const Projects = () => {
  return (
    <div className="max-wid  font-inter py-12 text-zinc-600 dark:text-zinc-400">
      <AnimateOnScroll duration={2} delay={0} animation="flipIn">
        <div>
          <h3 className="font-bold text-black dark:text-white font-andika sm:text-4xl text-2xl">
            Projects
          </h3>
          <p className="my-4 max-w-2xl">
            I haveve worked on tons of little projects over the years but these
            are the ones that I am most proud of. Many of them are open-source,
            so if you see something that piques your interest, check out the
            code and contribute if you have ideas on how it can be improved.
          </p>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          <div className="dark:bg-black bg-zinc-50 p-6 rounded-2xl">
            <img src="" alt="" />
            <div>
              <h3 className="font-semibold text-black dark:text-white text-xl">
                Trafalgal
              </h3>
              <p>Healthcare Landing Page</p>
            </div>
          </div>
          <div className="dark:bg-black bg-zinc-50 p-6 rounded-2xl">
            <img src="" alt="" />
            <div>
              <h3 className="font-semibold text-black dark:text-white text-xl">
                Trafalgal
              </h3>
              <p>Healthcare Landing Page</p>
            </div>
          </div>
          <div className="dark:bg-black bg-zinc-50 p-6 rounded-2xl">
            <img src="" alt="" />
            <div>
              <h3 className="font-semibold text-black dark:text-white text-xl">
                Trafalgal
              </h3>
              <p>Healthcare Landing Page</p>
            </div>
          </div>
          <div className="dark:bg-black bg-zinc-50 p-6 rounded-2xl">
            <img src="" alt="" />
            <div>
              <h3 className="font-semibold text-black dark:text-white text-xl">
                Trafalgal
              </h3>
              <p>Healthcare Landing Page</p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Projects;
