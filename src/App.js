import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/navbar';
import { Banner } from './components/banner';
import { Skills } from './components/skills';
import { Project } from './components/projects';
import { Footer } from './components/footer';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
    </div>
  );
}

export default App;
