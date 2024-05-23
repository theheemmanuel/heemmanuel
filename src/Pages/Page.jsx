import { useParams } from "react-router-dom";
import Allprojects from "./AllProject";

const Page = () => {
  const { ID } = useParams();
  console.log(ID);
  const page = Allprojects.find((project) => project.title === ID);
  return (
    <div>
      <h1 className="text-2xl font-viga text-center py-8">
        {page.title} Project
      </h1>
      <img width={"100%"} height={"100px"} src={page.image} alt="" />
      <div>{page.subtitle}</div>
    </div>
  );
};

export default Page;
