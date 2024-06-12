import pic from "../assets/me.jpg";
import { AnimateOnScroll } from "animate-on-scroll-framer";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    document.title = "My Profile";
  }, []);
  return (
    <div className="max-wid font-inter py-12 text-zinc-600 dark:text-zinc-400">
      <div>
        <AnimateOnScroll
          duration={2}
          delay={0}
          animation="flipIn"
          className="lg:px-20"
        >
          <div className="flex gap-6 flex-col-reverse lg:flex-row">
            <div className="">
              <h1 className="font-bold text-black dark:text-white font-viga sm:text-4xl text-2xl">
                I am Emmanuel Oladiran, a Software Developer and I live in
                Nigeria.
              </h1>
              <p className="my-4">
                I am a self-driven, career-oriented software developer
                specializing in front-end development, currently pursuing a
                bachelors degree in computer science. My expertise lies in
                building interactive web applications on the client side.
                Primarily working with technologies like JavaScript, React.JS
                and TypeScript.
              </p>
              <p className="my-4">
                I strongly believe in continuous learning and improving myself,
                so I try my best to learn in any situation possible, unfavorable
                or not.
              </p>
              <p className="my-4">
                Beyond learning, I enjoy writing technical articles and creating
                projects that both inspire and benefit fellow developers.
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
                  <li className="py-2">
                    <span className="font-semibold">Attention to Detail:</span>I
                    derive satisfaction from crafting meticulous designs and
                    user interfaces, placing a strong emphasis on quality to
                    ensure a polished end product.
                  </li>
                  <li className="py-2">
                    <span className="font-semibold">Critical Thinking:</span> I
                    derive satisfaction from crafting meticulous designs and
                    user interfaces, placing a strong emphasis on quality to
                    ensure a polished end product.
                  </li>
                  <li className="py-2">
                    <span className="font-semibold">
                      Self motivated & Independent:
                    </span>{" "}
                    Recognizing the value of time and efficiency, I excel in
                    delivering assignments and projects with minimal
                    supervision. My proactive approach allows you the freedom to
                    trust in the quality and timeliness of my work, eliminating
                    the need for constant oversight.
                  </li>
                  <li className="py-2">
                    <span className="font-semibold">
                      Collaboration Advocate:
                    </span>{" "}
                    Beyond individual excellence, I believe in the power of
                    collaboration. Whether it is contributing to a team project
                    or fostering a sense of community, I bring a collaborative
                    spirit that enhances the collective success of any endeavor.
                  </li>
                  <li className="py-2">
                    <span className="font-semibold">Continous Learner:</span> In
                    the ever-evolving landscape of technology, I am committed to
                    continuous learning. Staying abreast of the latest industry
                    trends and technologies ensures that my skills remain
                    cutting-edge, contributing to the overall success of the
                    projects I undertake.
                  </li>
                  <li className="py-2">
                    <span className="font-semibold">
                      Effective Communication:
                    </span>{" "}
                    Clear and concise communication is integral to project
                    success. I possess strong communication skills, facilitating
                    smooth collaboration with team members and stakeholders,
                    ensuring everyone is on the same page.
                  </li>
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
                    <a className="text-blue-500" href="">
                      Visual Studio Code:
                    </a>{" "}
                    Text Editor
                  </li>
                  <li className="my-4 font-semibold">
                    <a className="text-blue-500" href="">
                      Google Chrome:
                    </a>{" "}
                    Web Browser
                  </li>
                  <li className="my-4 font-semibold">
                    <a className="text-blue-500" href="">
                      Microsoft Edge:
                    </a>{" "}
                    Web Browser
                  </li>
                  <li className="my-4 font-semibold">
                    <a className="text-blue-500" href="">
                      Git Bash
                    </a>{" "}
                    Git Terminal
                  </li>
                  <li className="my-4 font-semibold">
                    <a className="text-blue-500" href="">
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
                    <a className="text-blue-500" href="">
                      React:
                    </a>{" "}
                    Javascript Framework
                  </li>
                  <li className="my-4 font-semibold">
                    <a className="text-blue-500" href="">
                      Javascript:
                    </a>{" "}
                    Programming Language
                  </li>
                  <li className="my-4 font-semibold">
                    <a className="text-blue-500" href="">
                      Tailwind CSS:
                    </a>{" "}
                    Styling Library
                  </li>
                  <li className="my-4 font-semibold">
                    <a className="text-blue-500" href="">
                      SASS/SCSS:
                    </a>{" "}
                    CSS Pre-processor
                  </li>
                  <li className="my-4 font-semibold">
                    <a className="text-blue-500" href="">
                      Bootstrap
                    </a>{" "}
                    Styling Library
                  </li>
                  <li className="my-4 font-semibold">
                    <a className="text-blue-500" href="">
                      Git
                    </a>{" "}
                    Version Control
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center min-w-[40%]">
              <img
                className="rounded-2xl sticky top-4 object-cover max-h-96"
                src={pic}
                alt=""
              />
            </div>
          </div>
          <h3></h3>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default About;
