import { useParams } from "react-router-dom";
import Allprojects from "./AllProject";
import { useEffect } from "react";

const Page = () => {
  const { ID } = useParams();
  const page = Allprojects.find((project) => project.title === ID);
  // console.log(page);
  useEffect(() => {
    document.title = page.title;
  }, []);
  return (
    <div className="max-w-[768px] mx-auto px-4">
      <div className="flex justify-between py-8">
        <h1 className="text-2xl font-viga text-center">{page.title}</h1>
        <button className="border-2 rounded-xl py-1 px-4">Explore</button>
      </div>
      <img width={"100%"} height={"100px"} src={page.main} alt="" />
      <div>{page.subtitle}</div>
    </div>
  );
};

export default Page;
