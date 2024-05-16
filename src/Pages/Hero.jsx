import brick from "../assets/O3PMpi01.svg";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
const Hero = () => {
  return (
    <div className="max-wid py-12 text-zinc-600 dark:text-zinc-400">
      <div className="items-center flex gap-6 md:flex-row flex-col">
        <div>
          <h1 className="font-bold text-black dark:text-white sm:text-4xl text-2xl font-viga">
            Software Developer, and open-source contributor.
          </h1>
          <p className="text-[16px] font-inter py-6">
            I am Emmanuel Oladiran, an experienced software developer passionate
            about learning and dedicated to crafting user-friendly,
            user-engaging, and visually appealing web interfaces that elevate
            the online world...
          </p>
          <div className="font-[monospace] flex gap-4 flex-wrap text-lg">
            {" "}
            <a
              className="flex items-center border-zinc-500 gap-1 border-b"
              href=""
            >
              <FaEnvelope /> <p>Email</p>
            </a>
            <a
              className="flex items-center border-zinc-500 gap-1 border-b"
              href=""
            >
              <FaGithub /> <p>Github</p>
            </a>
            <a
              className="flex items-center border-zinc-500 gap-1 border-b"
              href=""
            >
              <FaLinkedinIn /> <p>LinkedIn</p>
            </a>
            <a
              className="flex items-center border-zinc-500 gap-1 border-b"
              href=""
            >
              <FaTwitter /> <p>Twitter</p>
            </a>
            <a
              className="flex items-center border-zinc-500 gap-1 border-b"
              href=""
            >
              <FaInstagram /> <p>Instagram</p>
            </a>
          </div>
        </div>
        <div className="md:min-w-[40%] flex justify-center dark:bg-zinc-400">
          <img className="opacity-[0.7]" src={brick} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
