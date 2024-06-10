import { AnimateOnScroll } from "animate-on-scroll-framer";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
const Contact = () => {
  // const [loading, setloading] = useState(false);
  const sendemail = (e) => {
    // setloading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gzl5aen",
        "template_n200dql",
        e.target,
        "lESqVd20FENUrXgA4"
      )
      .then((response) => {
        if (response.status === 200) {
          e.target.reset();
          toast.success("Message sent Successfully", {
            theme: "colored",
            autoClose: 3000,
          });
        } else {
          toast.error("Error submitting form", {
            theme: "colored",
            autoClose: 3000,
          });
        }
      })
      .catch((err) => {
        toast.error("Error occured:" + err.message, {
          theme: "colored",
          autoClose: 3000,
        });
      });
  };
  useEffect(() => {
    document.title = "Contact Me";
  }, []);
  return (
    <div className="max-wid font-inter py-12 text-zinc-600 dark:text-zinc-400">
      <AnimateOnScroll
        duration={2}
        delay={0}
        animation="flipIn"
        className="lg:px-20"
      >
        <div>
          <ToastContainer transition={Bounce} position="top-center" />
          <div>
            <h3 className="font-bold text-black dark:text-white font-viga sm:text-4xl text-2xl">
              Get in Touch
            </h3>
            <p className="my-4 max-w-3xl">
              If you have any questions or queries about me and my work, Get in
              touch with me with any issues regarding my services. Please feel
              free to contact me. You can use the form below or via any other
              social media. or at least send me an email. I will definitely
              reach out to you.
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-12 pb-24 mt-12">
            <div className="border-2 dark:bg-black bg-zinc-50 p-6 rounded-xl w-[100%] md:w-[40%]">
              <div className="my-8">
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <FaLocationDot size={40} />
                  Location
                </h3>
                <p className="text-lg text-blue-500">Abuja, Nigeria</p>
              </div>
              <div className="my-8">
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <IoMdMail size={40} />
                  Email
                </h3>
                <a href="mailto:oladirane@gmail.com">
                  <p className="text-lg text-blue-500">oladirane@gmail.com</p>
                </a>
              </div>
              <div className="my-8">
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <IoCall size={40} />
                  Call
                </h3>
                <p className="text-lg text-blue-500">+2347032632513</p>
                <p className="text-lg text-blue-500">+2349138960240</p>
              </div>
            </div>
            <div className=" md:w-[60%] w-[100%] dark:bg-black bg-zinc-50 border-2 rounded-xl  p-6 ">
              <form onSubmit={sendemail}>
                <div className="flex flex-col gap-1 mb-4">
                  <label htmlFor="">Name</label>
                  <input
                    className="bg-transparent border-2 rounded-lg p-2"
                    required
                    name="from_name"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1 mb-4">
                  <label htmlFor="">Email</label>
                  <input
                    className="bg-transparent border-2 rounded-lg p-2"
                    required
                    name="from_email"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-1 mb-4">
                  <label htmlFor="">Message</label>
                  <textarea
                    className="bg-transparent h-[300px] border-2 p-2 rounded-lg"
                    required
                    name="message"
                    type="text"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-blue-500 text-white border-2 text-bold text-xl px-4 py-2 rounded-xl"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Contact;
