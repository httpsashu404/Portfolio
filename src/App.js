import Layout from "./components/Layout/Layout";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Education from "./Pages/Educations/Education";
import Projects from "./Pages/Projects/Projects";
import Techstack from "./Pages/Techstack/Techstack";
import WorkExp from "./Pages/workExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav";
function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">Made With &hearts; httpsashu404&copy;.2024</h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "#294a70", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;