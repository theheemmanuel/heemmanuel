/* eslint-disable react/no-unescaped-entities */
import pic from "../assets/me.jpg";
import { AnimateOnScroll } from "animate-on-scroll-framer";
import { useEffect } from "react";
const softSkills = [
  {
    head: "Meticulous Design Aesthetics: ",
    body: "I am very particular in designing and aesthetics, ensuring that the design of the layout, the flows, and spacing are very clean and interesting to the eye and brains.",
  },
  {
    head: "Strategic Analytical Thinking: ",
    body: "I pride myself in strategic thinking where I am able to look at issues from different perspectives, and use my intellect to come up with efficient solutions to challenging issues.",
  },
  {
    head: "Self-Driven and Diligent: ",
    body: "I possess a good work ethic and fully embrace the call to duty, and therefore love working on projects and delivering them on my own without much supervision or showing frequent impulsive tendencies as to whether or not the project will get completed on time.",
  },
  {
    head: "Clear and Concise Communicator: ",
    body: "I know that good communication is a key factor that should be used in proper functioning of cooperation. Due to my effective communication skills, I am able to effectively communicate the ideas and expectations with other members interested in the project, hence improving teamwork and strategic alignment.",
  },
  {
    head: "Collaborative Teamwork Spirit: ",
    body: "Though in single-player focused games, I personally am a firm believer of teamwork. I also take part in several team projects, thus creating awareness and encouraging the adoption of various stances to something that benefits everyone.",
  },
  {
    head: "Continuous Learning Mindset: ",
    body: "As we know that death occurs only for organisms, but in the world of technology, it emerges with new aspects and opportunities, so I am highly motivated and always ready to learn something new. The passion for continuing education guarantees that I am not out-of-date with the current industry trends and available technologies.",
  },
];

const About = () => {
  useEffect(() => {
    document.title = "My Profile";
  }, []);
  return (
    <div className="max-wid font-inter py-6 md:py-12 text-zinc-600 dark:text-zinc-400">
      <div>
        <AnimateOnScroll
          duration={2}
          delay={0}
          animation="flipIn"
          className="lg:px-20"
        >
          <div className="flex gap-6 flex-col-reverse md:flex-row">
            <div className="">
              <h1 className="font-bold text-black dark:text-white font-viga sm:text-4xl text-2xl">
                I am Emmanuel Oladiran, a Software Developer and I live in
                Nigeria.
              </h1>
              <p className="my-4">
                I am a passionate software developer and I thrive in the realm
                of front-end development by crafting interactive and engaging
                web applications. With a strong foundation in Computer Science,
                which I am currently pursuing through my Bachelor's degree. I
                specialize in bringing digital experiences to life on the client
                side. My expertise lies in leveraging cutting-edge technologies
                such as JavaScript, React.JS, and TypeScript to create seamless
                and intuitive user interfaces.
              </p>
              <p className="my-4">
                My believe is that growth and continuous learning are essential
                for professional success. Embracing this mindset, I actively
                seek out opportunities to expand my knowledge and skills,
                regardless of the circumstances, whether faced with favorable or
                challenging situations, I approach each experience as a chance
                to learn and evolve, ensuring that I remain at the forefront of
                industry advancements.
              </p>

              <div className="my-6">
                <h3 className="font-bold font-viga text-2xl text-black dark:text-white">
                  Soft Skills
                </h3>
                <p>
                  Certain skills I have picked along the way that deserves
                  mentioning:
                </p>
                <ul>
                  {softSkills.map((each) => (
                    <li key={each.head} className="py-2">
                      <span className="font-semibold">{each.head}</span>
                      {each.body}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <h3 className="font-bold font-viga text-2xl text-black dark:text-white">
                  Usage
                </h3>
                <p>
                  Tools and technologies I use on a daily basis but not limited
                  to.
                </p>

                <h3 className="font-bold mt-4 font-viga text-xl text-black dark:text-white">
                  Tools
                </h3>
                <ul>
                  <li className="my-4 font-semibold">
                    <a
                      className="text-blue-500"
                      target="blank"
                      href="https://code.visualstudio.com/"
                    >
                      Visual Studio Code:
                    </a>{" "}
                    Text Editor
                  </li>
                  <li className="my-4 font-semibold">
                    <a
                      className="text-blue-500"
                      target="blank"
                      href="https://www.google.com/chrome/"
                    >
                      Google Chrome:
                    </a>{" "}
                    Web Browser
                  </li>
                  <li className="my-4 font-semibold">
                    <a
                      className="text-blue-500"
                      target="blank"
                      href="https://www.microsoft.com/en-us/edge"
                    >
                      Microsoft Edge:
                    </a>{" "}
                    Web Browser
                  </li>
                  <li className="my-4 font-semibold">
                    <a
                      className="text-blue-500"
                      target="blank"
                      href="https://git-scm.com/"
                    >
                      Git Bash
                    </a>{" "}
                    Git Terminal
                  </li>
                  <li className="my-4 font-semibold">
                    <a
                      className="text-blue-500"
                      target="blank"
                      href="https://www.figma.com/"
                    >
                      Figma:
                    </a>{" "}
                    Design Tool
                  </li>
                </ul>

                <h3 className="font-bold mt-8 font-viga text-xl text-black dark:text-white">
                  Technologies
                </h3>
                <ul>
                  <li className="my-4 font-semibold">
                    <a
                      className="text-blue-500"
                      target="blank"
                      href="https://react.dev/"
                    >
                      React:
                    </a>{" "}
                    Javascript Framework
                  </li>
                  <li className="my-4 font-semibold">
                    <a
                      className="text-blue-500"
                      target="blank"
                      href="https://www.javascript.com/"
                    >
                      Javascript:
                    </a>{" "}
                    Programming Language
                  </li>
                  <li className="my-4 font-semibold">
                    <a
                      className="text-blue-500"
                      target="blank"
                      href="https://tailwindcss.com/"
                    >
                      Tailwind CSS:
                    </a>{" "}
                    Styling Library
                  </li>
                  <li className="my-4 font-semibold">
                    <a
                      className="text-blue-500"
                      target="blank"
                      href="https://sass-lang.com/"
                    >
                      SASS/SCSS:
                    </a>{" "}
                    CSS Pre-processor
                  </li>
                  <li className="my-4 font-semibold">
                    <a
                      className="text-blue-500"
                      target="blank"
                      href="https://getbootstrap.com/"
                    >
                      Bootstrap
                    </a>{" "}
                    Styling Library
                  </li>
                  <li className="my-4 font-semibold">
                    <a
                      className="text-blue-500"
                      target="blank"
                      href="https://github.com/"
                    >
                      Github
                    </a>{" "}
                    Version Control
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center min-w-[40%]">
              <div className="text-center">
                <a
                  href="/OLADIRAN EMMANUEL copy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border-2 py-2 mb-2 w-full rounded-2xl font-bold text-[20px] sticky top-4 hidden md:block">
                    Download CV
                  </button>
                </a>
                <img
                  className="rounded-2xl object-cover md:sticky top-20"
                  src={pic}
                  alt=""
                />
                <a
                  href="/OLADIRAN EMMANUEL copy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border-2 py-2 mt-2 w-full rounded-2xl font-bold text-[20px] block md:hidden">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>
          <h3></h3>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default About;
