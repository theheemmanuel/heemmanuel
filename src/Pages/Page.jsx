import { useParams } from "react-router-dom";
import project from "../Pages/AllProject.json";

const Page = () => {
  const { ID } = useParams();
  console.log(ID);
  const page = project.find((project) => project.title === ID);
  return (
    <div>
      <>
        {page.id}
        {page.subtitle}
        {page.title}
      </>
    </div>
  );
};

export default Page;
