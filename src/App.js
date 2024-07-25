import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavBar } from './components/navbar';
import { Banner } from './components/banner';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Footer } from './components/footer';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
