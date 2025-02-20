/* eslint-disable react/prop-types */
import etc from "../assets/blueLogo.png";
import sus from "../assets/logo2.png";
import saf from "../assets/FlexiSaf.png";
const Experience = () => {
  const WorkEXP = [
    {
      id: 1,
      company: "ETC Vibes",
      link: "https://etcvibes.com",
      started: "Jan 2024",
      ended: "Present",
      role: "Software Developer Intern",
      img: etc,
      work: "Collaborates with a team of developers and designers to create a working software for users and added other functionalities to the web app; Assists senior developers with debugging.",
    },
    {
      id: 2,
      company: "SustainaFinance Data Nexus",
      link: "http://sustaina-finance-esg.vercel.app",
      started: "Feb 2024",
      ended: "Dec 2024",
      role: "Project Manager",
      img: sus,
      work: "As the project manager, I lead the project, guilding developers on tasks and objectives, tracking progress and addressing issues to ensure successful project delivery.",
    },
    {
      id: 3,
      company: "FlexiSaf Edusoft LTD",
      link: "https://flexisaf.com/",
      started: "May 2024",
      ended: "Oct 2024",
      role: "Frontend Developer (SIWES)",
      img: saf,
      work: "During my exceptional SIWES training experience, I excelled in a structures curriculum with weekly learning objectives, masterfully leveraging provided resources to accelerate my skill development in frontend development as a whole.",
    },
  ];
  return (
    <div className="max-wid py-12 text-zinc-600 dark:text-zinc-400">
      <h1 className="font-viga font-bold text-2xl sm:text-3xl text-black dark:text-white">
        Work Experience
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 py-10">
        {WorkEXP.map((exp) => (
          <Workings key={exp} exp={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;

export function Workings({ exp }) {
  return (
    <div className="flex gap-4 font-inter">
      <div className="flex flex-col items-center">
        <img
          loading="lazy"
          className="min-w-[60px] border-2 p-1 dark:border-zinc-500 rounded-lg object-contain"
          src={exp.img}
          alt="company logo"
        />
        <p className="bg-zinc-300 dark:bg-zinc-500 w-[1.5px] h-[150px]"></p>
      </div>
      <div>
        <h3 className="text-xl font-bold font-viga">{exp.company}</h3>
        <h3 className="font-semibold">{exp.role}</h3>
        <h3 className="font-semibold pt-2">
          {exp.started} -{" "}
          <span className={exp.ended === "Present" ? "text-green-500" : ""}>
            {exp.ended}
          </span>
        </h3>
        <p className="py-4">{exp.work}</p>
      </div>
    </div>
  );
}
