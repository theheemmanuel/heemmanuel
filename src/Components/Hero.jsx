import brick from "../assets/O3PMpi01.svg";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
// import {} from "react-icons/fa";
const Hero = () => {
  return (
    <div className="max-wid lg:px-24 py-12 text-zinc-600 dark:text-zinc-400">
      <div className="items-center flex gap-6 md:flex-row flex-col">
        <div>
          <h1 className="font-bold text-black dark:text-white font-andika sm:text-4xl text-2xl">
            Software Developer, and open-source contributor.
          </h1>
          <p className="text-[16px] font-inter py-6">
            I am Toyin Makun, a passionate frontend developer dedicated to
            crafting user friendly websites. Skilled in team communication, user
            interface perfection, proactivity and problem-solving. I thrive on
            delivering outstanding work and continuously seeking innovative
            solutions to deliver outstanding result to clients.
          </p>
          <div className="font-[poppins] flex gap-4 flex-wrap text-sm">
            {" "}
            <a className="flex items-center border-zinc-500 gap-1 border-b" href="">
              <FaEnvelope /> <p>Email</p>
            </a>
            <a className="flex items-center border-zinc-500 gap-1 border-b" href="">
              <FaGithub /> <p>Github</p>
            </a>
            <a className="flex items-center border-zinc-500 gap-1 border-b" href="">
              <FaLinkedinIn /> <p>LinkedIn</p>
            </a>
            <a className="flex items-center border-zinc-500 gap-1 border-b" href="">
              <FaTwitter /> <p>Twitter</p>
            </a>
            <a className="flex items-center border-zinc-500 gap-1 border-b" href="">
              <FaInstagram /> <p>Instagram</p>
            </a>
          </div>
        </div>
        <div className="md:min-w-[40%] flex justify-center">
          <img className="opacity-[0.5]" src={brick} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
