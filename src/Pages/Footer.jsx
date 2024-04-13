// import { FaReact } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <p className="bg-zinc-600 dark:bg-zinc-400 w-[100%] h-[0.5px]"></p>
      <div className="pt-6 pb-12 max-wid flex md:flex-row flex-col text-center justify-between items-center sticky bottom-0">
        <div className="font-semibold">
          Built with: React.js Tailwind CSS Vercel
        </div>
        <div className="font-semibold">
          Copyright © Toyin Makun 2024 All rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
