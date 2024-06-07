import { useRouteError } from "react-router-dom";

const Errorpage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <div>
        <i>Ops, there is an error</i>
        <p>{error.statusText || error.message}</p>
      </div>
    </div>
  );
};

export default Errorpage;
