import Hero from "./Hero";
import Experience from "./Experience";
import { AnimateOnScroll } from "animate-on-scroll-framer";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    document.title = "Emmanuel Oladiran || Software Developer";
  }, []);
  return (
    <div>
      <AnimateOnScroll
        duration={2}
        delay={0}
        animation="flipIn"
        className="lg:px-20"
      >
        <Hero />
        <Experience />
      </AnimateOnScroll>
    </div>
  );
};

export default Home;
