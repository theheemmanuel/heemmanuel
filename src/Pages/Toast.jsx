import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  const notify = () =>
    toast.info("Invalid Username or Password", {
      theme: "colored",
      autoClose: 3000,
    });
  return (
    <div>
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer transition={Zoom} />
      </div>
    </div>
  );
};

export default Toast;
