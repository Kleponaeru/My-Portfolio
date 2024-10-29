import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavBar } from "./components/navbar";
import { Banner } from "./components/banner";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Footer } from "./components/footer";
import { Email } from "./components/email";
import CursorFollower from "./components/mouse-track/tracking";

function App() {
  return (
    <div className="App" style={{ cursor: "none" }}>
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Email></Email>
      <Footer></Footer>
      <CursorFollower></CursorFollower>
    </div>
  );
}

export default App;
