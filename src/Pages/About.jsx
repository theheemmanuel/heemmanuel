import pic from "../assets/me.jpg";
const About = () => {
  return (
    <div className="max-wid font-inter lg:px-24 md:p-12 p-6">
      <div>
        <div className="flex gap-6 flex-col-reverse lg:flex-row">
          <div>
            <h1 className="font-bold text-black dark:text-white font-andika sm:text-4xl text-2xl">
              I am Victor Eke. I live in Lagos, where I build the future.
            </h1>
            <p className="my-6">
              I am a self-driven, career-oriented software developer
              specializing in front-end development and open-source, currently
              pursuing a bachelors degree in computer science. My expertise lies
              in building interactive web applications on the client side.
              Primarily working with technologies like JavaScript, Next.js,
              TypeScript and Python.
            </p>
            <p className="my-6">
              I strongly believe in continuous learning and improving myself, so
              I try my best to learn in any situation possible, unfavorable or
              not.
            </p>
            <p className="my-6">
              Beyond learning, I enjoy writing technical articles and creating
              projects that both inspire and benefit fellow developers.
            </p>
          </div>
          <div className="flex justify-center min-w-[40%]">
            <img
              className="rounded-2xl object-cover max-h-96"
              src={pic}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
