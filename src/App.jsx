import "./App.css";
import {
  About,
  Hero,
  Navbar,
  Projects,
  Skills,
  Contact,
  Footer,
} from "./components";
import { BrowserRouter } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-primary bg-center bg-cover bg-no-repeat">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        draggablePercent={60}
        transition={Slide}
      />
    </>
  );
}

export default App;
