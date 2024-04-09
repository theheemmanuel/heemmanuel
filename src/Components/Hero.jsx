import brick from "../assets/O3PMpi01.svg";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa";
// import {} from "react-icons/fa";
const Hero = () => {
  return (
    <div className="max-wid">
      <div className="reddit items-center flex gap-6 md:flex-row flex-col">
        <div>
          <h1 className="font-bold">
            Software engineer, technical writer & open-source maintainer
          </h1>
          <p>
            I am Victor Eke, an experienced frontend developer passionate about
            learning and building open-source software that is beneficial to
            developers and the world at large.
          </p>
          <div className="font-[poppins] flex gap-4 flex-wrap">
            <a className="flex items-center gap-1 border-b-2" href="">
              <FaGithub /> <p>Github</p>
            </a>
            <a className="flex items-center gap-1 border-b-2" href="">
              <FaLinkedinIn /> <p>LinkedIn</p>
            </a>
            <a className="flex items-center gap-1 border-b-2" href="">
              <FaTwitter /> <p>Twitter</p>
            </a>
            <a className="flex items-center gap-1 border-b-2" href="">
              <FaInstagram /> <p>Twitter</p>
            </a>
            <a className="flex items-center gap-1 border-b-2" href="">
              <FaEnvelope /> <p>Email</p>
            </a>
          </div>
        </div>
        <div className="md:min-w-[40%] flex justify-center">
          <img src={brick} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
