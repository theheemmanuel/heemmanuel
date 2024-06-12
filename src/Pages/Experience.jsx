/* eslint-disable react/prop-types */
import etc from "../assets/blueLogo.png";
const Experience = () => {
  const WorkEXP = [
    {
      id: 1,
      company: "ETC Vibes",
      link: "https://etcvibes.com",
      started: "Jan 2014",
      ended: "Present",
      role: "Software Developer Intern",
      img: etc,
      work: "Collaborates with a team of developers and designers to create a working software for users and added other functionalities to the web app; Assists senior developers with debugging.",
    },
    {
      id: 2,
      company: "ETC Vibes",
      link: "https://google.com",
      started: "Jan 2014",
      ended: "Present",
      role: "Product Manager Intern",
      img: etc,
      work: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, excepturi tempora? Officiis dolor voluptas porro nesciunt, vitae rerum nobis enim.",
    },
    {
      id: 3,
      company: "ETC Vibes",
      link: "https://google.com",
      started: "Jan 2014",
      ended: "Present",
      role: "Product Manager Intern",
      img: etc,
      work: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, excepturi tempora? Officiis dolor voluptas porro nesciunt, vitae rerum nobis enim.",
    },
    {
      id: 4,
      company: "ETC Vibes",
      link: "https://google.com",
      started: "Jan 2014",
      ended: "Present",
      role: "Product Manager Intern",
      img: etc,
      work: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, excepturi tempora? Officiis dolor voluptas porro nesciunt, vitae rerum nobis enim.",
    },
  ];
  return (
    <div className="max-wid py-12 text-zinc-600 dark:text-zinc-400">
      <h1 className="font-viga font-bold text-2xl sm:text-3xl text-black dark:text-white">
        Work Experience
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 py-10">
        {WorkEXP.map((exp) => (
          <Workings
            key={exp.id}
            img={exp.img}
            link={exp.link}
            started={exp.started}
            ended={exp.ended}
            company={exp.company}
            role={exp.role}
            work={exp.work}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;

export function Workings({ img, link, started, ended, company, role, work }) {
  return (
    <div className="flex gap-4 font-inter">
      <div className="flex flex-col items-center">
        <img
          className="min-w-[80px] h-[80px] border-2 p-1 dark:border-zinc-500 rounded-lg"
          src={img}
          alt="company logo"
        />
        <p className="bg-zinc-300 dark:bg-zinc-500 w-[1.5px] h-[150px]"></p>
      </div>
      <div>
        <a className="text-xl font-bold font-viga" href={link} target="blank">
          {company}
        </a>
        <h3 className="font-semibold">{role}</h3>
        <h3 className="font-semibold pt-2">
          {started} - <span className="text-green-500">{ended}</span>
        </h3>
        <p className="py-4">{work}</p>
      </div>
    </div>
  );
}
