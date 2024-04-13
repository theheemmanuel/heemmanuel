import { AnimateOnScroll } from "animate-on-scroll-framer";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
const Contact = () => {
  return (
    <div className="max-wid  font-inter py-12 text-zinc-600 dark:text-zinc-400">
      <AnimateOnScroll duration={2} delay={0} animation="flipIn">
        <div>
          <div>
            <h3 className="font-bold text-black dark:text-white font-andika sm:text-4xl text-2xl">
              GET IN TOUCH
            </h3>
            <p className="my-4 max-w-3xl">
              If you have any questions or queries about me and my work, Get in
              touch with me with any issues regarding my services. Please feel
              free to contact me. You can use the form below or via any other
              social media. or at least send me an email. I will definitely
              reach out to you.
            </p>
          </div>
          <div className="flex md:flex-row flex-col">
            <div className="dark:bg-black bg-zinc-50 p-6 rounded-xl md:min-w-[40%]">
              <div className="my-6">
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <FaLocationDot size={40} />
                  Location
                </h3>
                <p className="text-lg text-blue-500">Abuja, Nigeria</p>
              </div>
              <div className="my-6">
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <IoMdMail size={40} />
                  Email
                </h3>
                <p className="text-lg text-blue-500">oladirane@gmail.com</p>
              </div>
              <div className="my-6">
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <IoCall size={40} />
                  Call
                </h3>
                <p className="text-lg text-blue-500">+2347032632513</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Contact;
