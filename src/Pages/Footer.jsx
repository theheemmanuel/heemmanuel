const Footer = () => {
  return (
    <div>
      <p className="bg-zinc-600 dark:bg-zinc-400 w-[100%] h-[0.5px]"></p>
      <div className="pt-6 pb-12 max-wid flex md:flex-row flex-col text-center justify-between items-center sticky gap-6 bottom-0">
        <div className="font-semibold">
          Built with: React.js; Tailwind CSS; Netlify
        </div>
        {/* <h3>
          Design inspired by{" "}
          <a
            target="_blank"
            className="underline text-blue-500"
            href="https://victoreke.com"
          >
            Victor Eke
          </a>
          <span>🙌</span>
        </h3> */}
        <div className="font-semibold">
          Copyright &copy; Emmanuel Oladiran 2025 All rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
