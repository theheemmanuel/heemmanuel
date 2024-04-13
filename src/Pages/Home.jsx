import Hero from "./Hero";
import Experience from "./Experience";
import { AnimateOnScroll } from "animate-on-scroll-framer";
const Home = () => {
  return (
    <div>
      <AnimateOnScroll duration={2} delay={0} animation="flipIn">
        <Hero />
        <Experience />
      </AnimateOnScroll>
    </div>
  );
};

export default Home;
