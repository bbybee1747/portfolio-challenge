
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Resume from "../../pages/Resume";
import Portfolio from "../../pages/Portfolio";

export default function Container( currentPage ) {
  if (currentPage === "About") {
    return <About />;
  }
  if (currentPage === "Contact") {
    return <Contact />;
  }
  if (currentPage === "Resume") {
    return <Resume />;
  }
  return <Portfolio />;
}