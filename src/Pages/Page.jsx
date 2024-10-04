import { useParams } from "react-router-dom";
import Allprojects from "./AllProject";
import { useEffect } from "react";

const Page = () => {
  const { ID } = useParams();
  const page = Allprojects.find((project) => project.title === ID);
  // console.log(page);
  useEffect(() => {
    document.title = page.title;
  }, [page]);
  return (
    <div className="max-w-[768px] mx-auto px-4">
      <div className="flex justify-between items-center py-8">
        <h1 className="md:text-4xl text-2xl font-viga text-center">
          {page.title}
        </h1>
        <a href={page.link} target="_blank">
          <button className="border-2 rounded-xl py-1 px-4">Explore</button>
        </a>
      </div>
      <img
        loading="lazy"
        width={"100%"}
        className="py-2"
        height={"100px"}
        src={page.main}
        alt=""
      />
      <div className="py-6">
        <h1 className="md:text-3xl text-xl font-viga mb-2">Overview</h1>
        <p className="text-lg mb-8">{page.overview}</p>
        <h1 className="md:text-3xl text-xl font-viga mb-2">
          Stacks/Technologies
        </h1>
        {page.tech.map((each) => (
          <li className="text-lg" key={each}>
            {each}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Page;
