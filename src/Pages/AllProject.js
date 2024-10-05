import pic2 from "../assets/Annotation 2024-05-27 105818.png";
import Trafalgar from "../assets/Trafalgar.jpg";
import GetLinked from "../assets/GetLinked.jpg";
import Get from "../assets/Get.png";
import ENC from "../assets/ENCLINKS.png";
import ENCdetails from "../assets/ENC.png";
import Jot from "../assets/jot.png";
import JotDetails from "../assets/Jotmain.png";

const Allprojects = [
  {
    id: 1,
    title: "Tranfalgar",
    subtitle: "Healthcare Landing page",
    image: pic2,
    main: Trafalgar,
    link: "https://naridalo0311.netlify.app",
    tech: ["HTML", "CSS", "JavaScript", "Animate on Scroll ", "Netlify"],
    overview:
      "Trafalgar is a healthcare landing page which gives an overview of the services rendered by the healthcare, latest articles and as well as testimonials from people who have used their services, it was built with HTML, CSS, and JavaScript. It features a responsive design and smooth animations uisng Animate on Scrill.",
  },
  {
    id: 2,
    title: "GetLinked",
    subtitle: "An Hackathon Project",
    image: Get,
    main: GetLinked,
    link: "https://linkedget.netlify.app",
    tech: ["HTML", "CSS", "JavaScript", "Netlify"],
    overview:
      "GetLinked is a hackathon project which I partook in it. It features a responsive design and smooth animations.",
  },
  {
    id: 3,
    title: "ENCLINKS Tech",
    subtitle: "Tech Company Landing page",
    image: ENC,
    main: ENCdetails,
    link: "https://enclinks.com",
    tech: ["React JS", "Tailwind CSS", "Animate on Scroll", "Hostinger"],
    overview:
      "ENCLINKS is a tech company landing page which talks about the services offered by the company and as well as their past projects. It was developed using React JS, Tailwind CSS for the styling, added Animate on Scroll to add smooth animations and it was hosted on Hostinger.",
  },
  {
    id: 2,
    title: "JotItDown",
    subtitle: "A Note Taking App",
    image: Jot,
    main: JotDetails,
    link: "https://fipproject.netlify.app",
    tech: ["React JS", "Tailwind CSS", "Chakra UI", "Netlify"],
    overview:
      "JotItDown is a versatile note-taking application that empowers users to effortlessly create, organize, modify, and remove notes. Built with React JS, this app features a sleek interface styled using Tailwind CSS and enhanced with Chakra UI components. Users can efficiently categorize their notes into custom folders, streamlining organization and accessibility. The application is deployed on Netlify, ensuring reliable and fast access for users across various devices.",
  },
];

export default Allprojects;
